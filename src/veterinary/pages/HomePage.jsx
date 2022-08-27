import { Button } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

import { AuthContext } from "../../auth/context/AuthContext";


export const HomePage = () => {

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {

    logout();

    navigate('/auth/login', {
      replace: true,
    })

  }

  return (
  <>
    <div>HomePage</div>

    <h1>{ user.name }</h1>

    <Button
      variant='contained'
      onClick={ onLogout }
    >
      Salir
    </Button>

  </>
  )
}
