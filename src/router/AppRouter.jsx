import { Routes, Route } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { PublicRoutes, PrivateRoutes } from './';

import { VeterinaryRoute } from '../veterinary/routes/VeterinaryRoute';

export const AppRouter = () => {
  return (
    <Routes>

        <Route path='/auth/*' element={
          <PublicRoutes>
            <AuthRoutes />
          </PublicRoutes>
        } />

        <Route path='/*' element={
          <PrivateRoutes>
            <VeterinaryRoute />
          </PrivateRoutes>
        } />

        {/* <Route path='/auth/*' element={ <AuthRoutes /> } /> */}
        {/* <Route path='/*' element={ <VeterinaryRoute /> } /> */}


    </Routes>
  )
}
