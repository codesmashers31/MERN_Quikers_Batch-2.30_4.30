import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TeaProduct from './components/TeaProduct.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TeaProduct>
    <App />
    </TeaProduct>
  </StrictMode>,
)
