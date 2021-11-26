import { Navigate } from 'react-router-dom';
import Home from '../views/Home.jsx'
import Register from '../views/Register'
import NotFound from '../views/NotFound'

const routes = (hasUsername) => [
     {
          path: '/home',
          element: hasUsername ? <Home /> : <Navigate to="/" />
     },
     {
          path: '/',
          element: !hasUsername ? <Register /> : <Navigate to="/home" />
     },
     {
          path: '*',
          element: <NotFound/>
     }
];

export default routes;