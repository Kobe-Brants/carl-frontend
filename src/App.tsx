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
        <Header />
        <main className="min-h-[80vh]">
          <Routes>
            <Route path="/login" element={<>todo</>} />
            <Route path="*" element={<NotFound />} />

            <Route path="/" element={<IndexPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
