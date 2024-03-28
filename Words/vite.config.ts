import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

/** @type {import('vite').UserConfig} */
export default ({ mode }: { mode: string }) => {
	// Extends 'process.env.*' with VITE_*-variables from '.env.(mode=production|development)'
			process.env = {...process.env, ...loadEnv(mode, process.cwd())};
			return defineConfig({
				plugins: [sveltekit()]
			}); 
		}
