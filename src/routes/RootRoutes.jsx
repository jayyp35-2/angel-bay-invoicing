import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Invoice from '../modules/Invoice';
import GeneratedInvoice from '../modules/Invoice/components/GeneratedInvoice';
import ReactPdfInvoice from '../modules/Invoice/components/ReactPdfInvoice';
import PrivateRoutes from './PrivateRoutes';

function RootRoutes() {
  const isAuthenticated = true;
  return (
    <Routes>
      <Route path="login" element={<>Login</>} />
      {!!isAuthenticated && (
        <Route path="" element={<PrivateRoutes />}>
          <Route path="create" element={<Invoice />} />
          <Route path="invoice" element={<><GeneratedInvoice /><ReactPdfInvoice /></>} />
        </Route>
      )}
    </Routes>
  )
}

export default RootRoutes;