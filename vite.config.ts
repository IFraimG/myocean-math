import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
// import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  plugins: [
    reactRefresh(),
    // ...VitePluginNode({
    //   server: 'express', 
    //   appPath: './server.js',
    //   port: 3000,
    //   tsCompiler: 'esbuild',
    //   createCustomServer: () => IServer 
    // })]
  ]
})
