import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The React plugin provides automatic JSX transformation and Fast Refresh.
export default defineConfig({ plugins: [react()] });
