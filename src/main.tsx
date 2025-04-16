// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { initializeAuth } from './shared/util/initAuth.ts'

import '@style/reset.css'
import '@style/color.css'
import '@style/zindex.css'

import './index.css'
import App from './App.tsx'

initializeAuth()

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  // </StrictMode>
)
