import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RootRoutes from './routes/RootRoutes';
import './scss/App.scss';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RootRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;