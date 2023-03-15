import React, { ChangeEvent, useEffect, useState } from 'react';
import './CadastroUsuario.css'
import { Grid,Typography, Button, TextField } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { cadastroUsuario } from '../../services/Service';
import User from '../../models/User';
import { toast } from 'react-toastify';

function CadastroUsuario(){
    let navigate = useNavigate()
    const [user, setUser] = useState<User>({
      id: 0,
      nome: '',
      usuario: '',
      senha: ''
    })
    const [userResult, setUserResult] = useState<User>({
      id: 0,
      nome: '',
      usuario: '',
      senha: ''
    })
  
    const [confirmarSenha, setConfirmarSenha] = useState<String>('')
  
    function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>){
      setConfirmarSenha(event.target.value)
    }
  
    function updateModel(event: ChangeEvent<HTMLInputElement>) {
      setUser({
        ...user,
        [event.target.name]: event.target.value
      })
    }
  
    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
        if(user.senha === confirmarSenha) {
          await cadastroUsuario('/usuarios/cadastrar', user, setUserResult);
          toast.success("Usuário cadastrado com sucesso", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined
        });        } else {
          toast.error("As senhas não conferem", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined
        });        }
      } catch (error) {
        toast.error("Falha no cadastro, por favor, verifique os campos", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
          progress: undefined
      });
      }
    }
  
    useEffect(() => {
      if(userResult.id !== 0) {
        navigate('/login')
      }
    }, [userResult])
  
  
    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}  id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={user.usuario} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal'fullWidth />
                        <TextField value={user.senha} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField value={confirmarSenha} onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                    Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>



        </Grid>
    )
}

export default CadastroUsuario;