import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SiteHeader from './components/header/header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ServiceDropdown></ServiceDropdown> */}
    <SiteHeader></SiteHeader>
  </React.StrictMode>
)
