import react from "react";
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import './Home.css';
import Box from '@mui/material/Box';
import { Block } from "@material-ui/icons";
import { Link } from "react-router-dom";
import TabPostagens from "../../components/postagens/tabPostagens/TabPostagens";

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box >
                        <Link className="links" to='/postagens'>
                        <Button className='botao' variant="contained" color="inherit">Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                <TabPostagens />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
