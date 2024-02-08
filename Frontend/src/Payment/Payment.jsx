import React from "react";
import upiImage from "../assets/upi.webp"
import '@radix-ui/themes/styles.css';
import {TextField, Dialog, Button, Flex} from "@radix-ui/themes"
import { useNavigate } from "react-router-dom";


export function Payment(){

    return(
    <div style={{width: "100%", minHeight : "100vh", display: "grid", alignItems: "center", backgroundColor: "gray"}}>
        <div className="UpiBox">
                <h2>UPI</h2>
                <div style={{display: "flex", width: "250px", justifyContent: "space-between", alignItems: "center"}}>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img src = {upiImage} style = {{width: "60px", height: "60px", marginRight: "10px"}}/>
                        <p>Pay via UPI Id</p>
                    </div>
                    <div>
                        <button><DialogPoP /></button>
                    </div>
                </div>
        </div>
    </div>
    )
    
}

export default function DialogPoP(){
    const navigate = useNavigate()
    const handleUpiPage = ()=>{
        navigate()
    }
    return(
        <Dialog.Root>
            <Dialog.Trigger>
            <Button><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></Button>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 450 }}>
                <Dialog.Title>UPI</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    Enter Your Upi Id
                </Dialog.Description>

                <Flex direction="column" gap="3">
                <label>
                    <p style={{fontWeight: "bold"}}>UPI ID</p>
                    <TextField.Input
                    defaultValue="123456789@upi"
                    placeholder="Enter your full name"
                    />
                </label>
                </Flex>

                <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                    <Button variant="soft" color="gray">
                    Cancel
                    </Button>
                </Dialog.Close>
                <Dialog.Close>
                    <Button style={{backgroundColor: "rgba(110, 66, 229, 1)"} } onClick={handleUpiPage}>Proceed to Pay</Button>
                </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}