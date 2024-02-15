import {useState} from "react"

export function PhoneFunction(initialNumber){
    const [phone, setphone] = useState(initialNumber)

    return {phone}
}
export function AddressFunction(initialValue){
     const [address, setaddress] = useState(initialValue)


     return {address}
}

export function SlotFunction(initialValue){
    const [slot, setslot] = useState(initialValue)

    return {slot}
}


