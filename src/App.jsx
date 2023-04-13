import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/dashboard';
import AppRoute from './routes/routes';

function App() {
  return (
    <div>
      <AppRoute />
    </div>
  );
}

export default App;