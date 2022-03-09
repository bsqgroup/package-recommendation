import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [reactRefresh(), tsconfigPaths()],
    resolve: {
        alias: {
            '/assets': './src/assets',
            '/components': './src/components',
            '/hooks': './src/hooks',
            '/interfaces': './src/interfaces',
            '/services': './src/services',
            '/styles': './src/styles',
            '/types': './src/types',
            '/utils': './src/utils',
            process: 'process/browser',
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import './src/styles/config.scss';`,
            },
        },
    },
});
