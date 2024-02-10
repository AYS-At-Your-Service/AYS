import './App.css'
import { CheckOut } from './components/CheckOut/Checkout'
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/checkout" element = {<CheckOut />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
