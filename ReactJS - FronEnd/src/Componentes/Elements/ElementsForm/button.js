import React from "react";


export default function Button_(){
    return(
        <>
            <button onClick={props.click} >{props.children}</button>
        </>
    )
}