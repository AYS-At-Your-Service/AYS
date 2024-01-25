import './App.css'
import { CheckOut } from './Payment/Checkout'
import { Payment } from './Payment/Payment'
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/checkout" element = {<CheckOut />}/>
        <Route path = "/payment" element = {<Payment />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
