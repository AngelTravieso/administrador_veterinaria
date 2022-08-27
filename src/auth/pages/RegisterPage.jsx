import { Button, Grid, Link, TextField } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { AuthLayout } from '../layout/AuthLayout';


export const RegisterPage = () => {
  return (
    <AuthLayout title='Registro'>
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
            <Button component={ RouterLink } variant='contained' fullWidth to='/'>Crear cuenta</Button>
          </Grid>

          <Grid container
            justifyContent='end'
            sx={{
              mt: 1,
            }}
          >
            <Link component={ RouterLink } to='/auth/login' underline='none'>Ingresar</Link>

          </Grid>

    </AuthLayout>
  )
}
