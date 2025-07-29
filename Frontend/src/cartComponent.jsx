import React from "react";
import Laptop from "./laptop";

function CartComponent({props}) {
    return(
        <>
        <img
            src={props?.img}
            alt="Laptop"
            />
        </>
    )
}
export default CartComponent;