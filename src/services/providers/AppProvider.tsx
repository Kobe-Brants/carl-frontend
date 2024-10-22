import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import { AuthContextProvider } from '@/services/contexts/AuthContext.tsx';
import { ApiContextProvider } from '@/services/contexts/ApiContext.tsx';

interface AppProviderProps {
  children: ReactNode;
  queryClient: QueryClient;
  baseName: string;
}

const AppProviders = ({
  children,
  queryClient,
  baseName,
}: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={baseName}>
        <PrimeReactProvider>
          <AuthContextProvider>
            <ApiContextProvider>{children}</ApiContextProvider>
          </AuthContextProvider>
        </PrimeReactProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default AppProviders;
