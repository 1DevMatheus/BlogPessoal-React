import React, {ChangeEvent, useEffect, useState} from "react"
import { Grid, Paper, TextField, Typography } from '@material-ui/core';
import Button from "@mui/material/Button/Button";
import { Box } from '@mui/material';
import './Login.css';
import { login } from '../../services/Service';
import UserLogin from "../../models/UserLogin";
import { Link, useNavigate } from 'react-router-dom'
import useLocalStorage from "react-use-localstorage";
function Login() {
    
    let navigate = useNavigate()
    const [token, setToken] = useLocalStorage('token')
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>){
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }
 
    useEffect(()=>{
        if(token != ''){
            navigate('/home')
        }
    }, [token])
    
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        try{
          await login('/usuarios/logar', userLogin, setToken)
          alert('Usuário logado com sucesso')
        } catch(error) {
          alert('Usuário e/ou senha inválidos')
        }
      }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        {/* Texto de boas vinda */}
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{fontWeight: 'bold'}}>Sejam Bem Vindes!</Typography>
                        {/* Campo do form parte de inserir usuario */}
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        {/* Campo do form parte de inserir a senha */}
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                        {/* Botão de logar */}
                        <Box marginTop={2} textAlign='center'>
                                 
                                 <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            
                        </Box>
                    </form>
                    {/*Campo de perguntar caso a pessoa não tenha conta  */}
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                           <Link className="cadastre-se" to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{fontWeight: 'bold'}}>Cadastre-se</Typography>
                            </Link>
                    </Box>
                </Box>
            </Grid>
                {/* Backgroud image */}
            <Grid xs={6} style={{
                backgroundImage: `url(https://i.imgur.com/d5bMdDJ.jpg)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
            }}>

            </Grid>
        </Grid>

    );
}

export default Login;