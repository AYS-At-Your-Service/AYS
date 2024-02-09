import React from "react";
import Image from "../assets/location.webp"
import SlotImage from "../assets/slot.webp"
import paymentImage from "../assets/payment.webp"
import { PhoneFunction } from "../States/state.js"; 
import { AddressFunction } from "../States/state.js";
import { SlotFunction } from "../States/state.js";
import { useNavigate } from "react-router-dom";


export function CheckOut(){
    const {phone} = PhoneFunction()
    const {address} = AddressFunction()
    const {slot} = SlotFunction()
    
    const navigate = useNavigate()

    function handleProceed(){
        navigate("/payment")
    }

    return(
        <div  className = "CheckOut-Main">
    <div className='CheckOut_Header'>
          <h1>Checkout</h1>
    </div>
      <div className='Box-Wrapper'>
        <div className = "Inside-Box">
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div style={{display: "flex"}}>
                <img src = {Image} className="Image"></img>
                <div>
                  <h4>Send Booking Details</h4>
                  <p>+91 <span>{phone}</span></p>
                </div> 
            </div>
            <div>
                {/* I leaves it as it's In order to avoid the confusion between the further Inside-Box  */}
            </div>
          </div>
          <div>
            {/* I leaves it as it's In order to avoid the confusion between the further Inside-Box  */}
          </div>
        </div>
        
        <div className='Inside-Box'>
          <div  className='Inner-Inside-Box'>
            <div style={{display: "flex"}}>
                <img src = {Image} className="Image"></img>
                <div>
                  <h4>Address</h4>
                  <p>{address}</p>
                </div> 
            </div>
            <div>
                {address && <button className='smallButton'><b>Edit</b></button>}
            </div>
          </div>
          <div className='LargeButtonDiv'>
            {
              (!address && <button className='large_Button'>Set a Address</button>)
            }
            
          </div>
        </div>
        
      
        <div className='Inside-Box'>
          <div className='Inner-Inside-Box'>
            <div style={{display: "flex"}}>
                <img src = {SlotImage} className="Image"></img>
                <div>
                  <h4>Slot</h4>
                  <p>{slot}</p>
                </div> 
            </div>
            <div>
              {slot && <button className='smallButton'><b>Edit</b></button>}
            </div>
          </div>
          <div className='LargeButtonDiv'>
            {
              (!slot && <button className='large_Button'>Set a Slot</button>)
            }
            
          </div>
        </div>
        <div className='Inside-Box'>
          <div className='Inner-Inside-Box'>
            <div style={{display: "flex"}}>
                <img src = {paymentImage} className="Image"></img>
                <div>
                  <h4>Payment</h4>
                </div> 
            </div>
            <div>
                
            </div>
          </div>
          <div className="LargeButtonDiv">
            {
              (slot && address && <button className='large_Button' onClick={handleProceed}>Payment</button>)
            }
            
          </div>
        </div>
        

      </div>

   </div>
    )
}

