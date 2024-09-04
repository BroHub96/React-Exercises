import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});

// 1. Si, si può usare l'Hello component più di una volta nel App component. 
//    Quando lo si usa più volte, renderizza ogni istanza (quindi ogni contenuto in Hello) in modo indipentente, 
//    quindi si vedrà stampato "Hello, World!" più volte nella pagina.

// 2. Se si renderizza il Message component direttamente all'interno dell'App component, 
//    verrà mostrato il messaggio "What a beautiful day!" insieme a qualsiasi component esistente all'interno di App. 
//    Il contenuto verrà renderizzato nel modo corretto.

