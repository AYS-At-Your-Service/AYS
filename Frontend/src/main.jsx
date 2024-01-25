import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ServiceDropdown from './components/service-dropdown.jsx'
import SiteHeader from './components/header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ServiceDropdown></ServiceDropdown> */}
    <SiteHeader></SiteHeader>
  </React.StrictMode>
)
