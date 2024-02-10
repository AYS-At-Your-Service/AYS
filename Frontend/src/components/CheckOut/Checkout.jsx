import React from "react";
import Image from "../../assets/location.webp"
import SlotImage from "../../assets/slot.webp"
import paymentImage from "../../assets/payment.webp"
import ClassNames from "classnames"
import InnerDivstyles from "../CheckOut/Divcss/InnerBox.module.css"
import OuterDivStyles from "../CheckOut/Divcss/InsideBox.module.css"
import BoxStyles from "../CheckOut/BoxWrapper.module.css"
import CheckoutMainStyles from "../../components/CheckOut/CheckoutMain.module.css"
import {LandLine} from "../CheckOut/constants/constant.js"
import HeaderStyles from "../CheckOut/CheckOutHeader.module.css"
import { PhoneFunction } from "../../States/state.js"; 
import { AddressFunction } from "../../States/state.js";
import { SlotFunction } from "../../States/state.js";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";


export function CheckOut(){
    const {phone} = PhoneFunction()
    const {address} = AddressFunction()
    const {slot} = SlotFunction()

    // Importing the styles from module.css

    let MainDivStyles = classNames(CheckoutMainStyles['CheckOut-Main'])
    let headerStyles =  classNames(HeaderStyles['CheckOut_Header'])
    let boxStyles =     classNames(BoxStyles['Box-Wrapper'])
    let outerdivStyles =classNames(OuterDivStyles['Inside-Box'])
    let innerdivflex = classNames(InnerDivstyles['Inner-Inside-Box'])
    let largeButtondiv = classNames(InnerDivstyles['LargeButtonDiv'])
    let ImageStyles    = classNames(InnerDivstyles['Image'])
    let smallButtonStyles=classNames(InnerDivstyles['smallButton'])
    let largeButtonStyles=classNames(InnerDivstyles['large_Button'])


    const navigate = useNavigate()

    function handleProceed(){
        navigate("/payment")
    }

    return(
    <div  className = {MainDivStyles}>
    <div className={headerStyles}>
          <h1>Checkout</h1>
    </div>
      <div className={boxStyles}>
        <div className = {outerdivStyles}>
          <div className={innerdivflex}>
            <div style={{display: "flex"}}>
                <img src = {Image} className= {ImageStyles}></img>
                <div>
                  <h4>Send Booking Details</h4>
                  <p>{LandLine}<span>{phone}</span></p>
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
        
        <div className={outerdivStyles} >
          <div className= {innerdivflex}>
            <div style={{display: "flex"}}>
                <img src = {Image} className= {ImageStyles}></img>
                <div>
                  <h4>Address</h4>
                  <p>{address}</p>
                </div> 
            </div>
            <div>
                {address && <button className= {smallButtonStyles}><b>Edit</b></button>}
            </div>
          </div>
          <div className= {largeButtondiv}>
            {
              (!address && <button className= {largeButtonStyles}>Set a Address</button>)
            }
            
          </div>
        </div>
        
      
        <div className= {outerdivStyles}>
          <div className= {innerdivflex}>
            <div style={{display: "flex"}}>
                <img src = {SlotImage} className= {ImageStyles}></img>
                <div>
                  <h4>Slot</h4>
                  <p>{slot}</p>
                </div> 
            </div>
            <div>
              {slot && <button className= {smallButtonStyles}><b>Edit</b></button>}
            </div>
          </div>
          <div className= {largeButtondiv}>
            {
              (!slot && <button className= {largeButtonStyles}>Set a Slot</button>)
            }
            
          </div>
        </div>
        <div className={outerdivStyles}>
          <div className={innerdivflex}>
            <div style={{display: "flex"}}>
                <img src = {paymentImage} className= {ImageStyles}></img>
                <div>
                  <h4>Payment</h4>
                </div> 
            </div>
            <div>
                
            </div>
          </div>
          <div className= {largeButtondiv}>
            {
              (slot && address && <button className= {largeButtonStyles} onClick={handleProceed}>Payment</button>)
            }
            
          </div>
        </div>
        

      </div>

   </div>
    )
}

