import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  
  RouterProvider
} from "react-router-dom";
import router from './Routes/router';
import AuthProvider from './Provider/AuthProvider';

createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto m-5 '>
    <StrictMode>
      <AuthProvider>

      <RouterProvider router={router} />

      </AuthProvider>
     
  </StrictMode>
  </div>,
)
