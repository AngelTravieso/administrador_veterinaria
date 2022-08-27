import { Routes, Route } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { VeterinaryRoute } from '../veterinary/routes/VeterinaryRoute';


export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/auth/*' element={ <AuthRoutes /> } />
        <Route path='/*' element={ <VeterinaryRoute /> } />
    </Routes>
  )
}
