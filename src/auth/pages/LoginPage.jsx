import { Button, Grid, Link, TextField } from '@mui/material';
import { useContext } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    
    login( 'Angel Travieso' );

    navigate('/', {
      replace: true,
    });

  }


  return (
    <AuthLayout title='Ingresar'>
          <Grid item
            sx={{
              mt: 2,
            }}
          >
            <TextField type='text' variant='outlined' label='Usuario' fullWidth />
          </Grid>

          <Grid item
            sx={{
              mt: 2,
            }}
          >
            <TextField
              type='password'
              variant='outlined'
              label='Contraseña'
              autoComplete='off'
              fullWidth 
            />
          </Grid>

          <Grid item
            sx={{
              mt: 2,
            }}
          >
            <Button variant='contained' fullWidth onClick={ onLogin }>Ingresar</Button>
          </Grid>

          <Grid container
            justifyContent='end'
            sx={{
              mt: 1,
            }}
          >
            <Link component={ RouterLink } to='/auth/register' underline='none'>Crear cuenta</Link>
          </Grid>

    </AuthLayout>
  )
}
