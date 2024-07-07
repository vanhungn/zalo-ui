import React from 'react'

export default function Button({type,className,label,style,onClick}) {
  return (
    <button className={className} onClick={onClick} style={style} type={type}>{label}</button>
  )
}

