import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProductProvider } from './components/Context/ProductContext.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <App />
      </ProductProvider>
  </React.StrictMode>,
)
