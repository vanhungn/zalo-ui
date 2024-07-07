import React from "react";
const Input=({className,type,placeholder,name,onChange,value})=>{
    return(
        <input className={className} onChange={onChange} value={value} name={name} type={type} placeholder={placeholder}/>
    )
}
export default Input