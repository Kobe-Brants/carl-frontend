import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default ({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd());
  // eslint-disable-next-line no-undef
  const root = path.resolve(__dirname, 'src');

  return defineConfig({
    plugins: [react()],
    base: env.VITE_BASE_NAME || '/',
    resolve: {
      alias: {
        '@': root,
      },
    },
  });
};
