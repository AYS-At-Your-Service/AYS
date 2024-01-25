import React from "react";
import Image from "../assets/location.webp"
import Slot from "../assets/slot.webp"
import paymentImage from "../assets/payment.webp"
import {useState} from "react"
import { useNavigate } from "react-router-dom";


export function CheckOut({amount}){
    const [number, setNumber] = useState(9999999999)
    const [address, setaddress] = useState("sabesh")
    const [slot, setslot] = useState("boomer")
    const navigate = useNavigate()

    let AddressClass = address ? 'CheckOut_box' : 'CheckOut_box_Inactive'
    let slotClass = address ? 'CheckOut_box' : 'CheckOut_box_Inactive'

    function handleProceed(){
        navigate("/payment")
    }

    return(
        <div className = "CheckOut">
            <div className="CheckOut_Header">
                <h1>Checkout</h1>
            </div>
            <div className="CheckOut_main">
                <div className= "CheckOut_box">
                    <div style={{display: "flex"}}>
                        <div className="inner_CheckOut_box">
                            <img src = {Image}></img>
                        </div>
                        <div className="inner_CheckOut_box">
                            <h3>Send Booking Details</h3>
                            <p>+91<span> </span>{number}</p>
                        </div>
                    </div>
                </div>
                <div className= {AddressClass}>
                    <div style={{display: "flex"}}>
                        <div className="inner_CheckOut_box">
                            <img src = {Image}></img>
                        </div>
                        <div className="inner_CheckOut_box">
                            <h3>Address</h3>
                            {
                                address && (
                                    <p>{address}</p>
                                )
                            }
                            
                        </div>
                      
                    </div>
                    <div>
                        {
                            address && (
                                <button className="small_button" >Edit</button>
                            )
                        }
                        
                    </div>
                        { !address && (
                                <button className="large_button" style={{margin: "0 auto"}}>Set Address</button>
                        )}
                </div>
                <div className= {slotClass}>
                    <div style={{display: "flex"}}>
                        <div className="inner_CheckOut_box">
                            <img src = {Slot}></img>
                        </div>
                        <div className="inner_CheckOut_box">
                            <h3>Slot</h3>
                            {slot && ( <p>{slot}</p> )}
                        </div>
                    </div>
                    <div>
                        {
                            slot && <button className="small_button">Edit</button>
                        }
                    </div> 
                    { !slot && <button className="large_button" style={{margin: "0 auto"}}>Set Slot</button>}
                </div>
                <div className= 'CheckOut_box_Inactive'>
                    <div style={{display: "flex"}} >
                        <div>
                            <img src={paymentImage}></img>
                        </div>
                        <div>
                            Payment
                        </div>
                    </div> 
                    {
                        (slot && address) && (<button className="large_button" style={{margin: "0 auto"}} onClick={handleProceed}> Pay {amount} </button>)
                    } 
                </div>
            </div>
        </div>
    )
}