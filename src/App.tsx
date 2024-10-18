import './assets/styles/index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './layouts/Header.tsx';
import Footer from './layouts/Footer.tsx';
import NotFound from './pages/NotFound.tsx';
import IndexPage from './pages/Index.tsx';

function App() {
  const queryClient = new QueryClient();
  const baseName = import.meta.env.VITE_BASE_NAME;

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={baseName}>
        <div className="flex flex-col h-screen justify-between sm:px-6 lg:px-8 mx-auto max-h-screen">
          <Header />
          <main className="mb-auto flex-grow">
            <Routes>
              <Route path="/login" element={<>todo</>} />
              <Route path="*" element={<NotFound />} />

              <Route path="/" element={<IndexPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
