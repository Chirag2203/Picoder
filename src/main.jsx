import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { CodeProvider } from './Contexts/CodeContext.jsx';
import { UserProvider } from './Contexts/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <CodeProvider>
        <App />
      </CodeProvider>
    </UserProvider>
  </React.StrictMode>,
);
