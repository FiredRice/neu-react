import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import neutralino from './.config/neutralino';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		outDir: 'build'
	},
	resolve: {
		alias: [
			{
				find: 'src',
				replacement: resolve(__dirname, 'src')
			}
		]
	},
	server: {
		port: 3002
	},
	plugins: [
		react(),
		neutralino(),
	]
});
