import { Button, Grid, Link, TextField } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
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
            <Button variant='contained' fullWidth>Ingresar</Button>
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
