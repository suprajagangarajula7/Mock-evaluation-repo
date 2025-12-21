import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TheamProvider } from './Context/TheamContext.jsx'
import { PostProvider } from './Context/PostsContext.jsx'

createRoot(document.getElementById('root')).render(
  <TheamProvider>
    <PostProvider>
      <App/>
    </PostProvider>
  </TheamProvider>,
)
