import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProductProvider } from './components/Context/ProductContext.jsx'
import { UrlProvider } from './components/Context/UrlContext.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UrlProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </UrlProvider>
  </React.StrictMode>,
)
