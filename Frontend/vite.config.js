import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

// For Avoid CORS Error while hitting an api 
export default defineConfig({
//add server
  server:{
    proxy:{
      '/api':'http://localhost:3000'
    }
  },
 lugins: [react()],

})
