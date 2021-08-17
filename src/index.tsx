import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserRepositoryProvider } from './contexts/UserRepository';

ReactDOM.render(
  <React.StrictMode>
    <UserRepositoryProvider>
      <App />
    </UserRepositoryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
