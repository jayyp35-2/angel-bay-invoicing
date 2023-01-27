import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../common/Sidebar';

function PrivateRoutes() {
  return (
    <React.Fragment>
      <Sidebar />
      <div className='AuthenticatedApp'>
        <Outlet />
      </div>
    </React.Fragment>
  )
}

export default PrivateRoutes