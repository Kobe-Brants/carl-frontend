import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { PrimeReactProvider } from 'primereact/api';
import { AuthContextProvider } from './services/contexts/AuthContext.tsx';
import { ApiContextProvider } from './services/contexts/ApiContext.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <PrimeReactProvider>
      <AuthContextProvider>
        <ApiContextProvider>
          <App />
        </ApiContextProvider>
      </AuthContextProvider>
    </PrimeReactProvider>
  </StrictMode>,
);
