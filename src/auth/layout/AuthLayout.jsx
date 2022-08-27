import { Grid, Typography } from "@mui/material"


export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        sx={{ 
            backgroundColor: 'primary.main',
            minHeight: '100vh'
        }}
    >

        <Grid item
          xs={ 12 }
          sx={{
            width: 450,
            backgroundColor: 'white',
            borderRadius: 3,
            p: 2,
          }}
        >
          
        <Typography variant='h5'>{ title }</Typography>

        { children }

        </Grid>
    </Grid>
  )
}
