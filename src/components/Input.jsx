import React from 'react'

export default function Input({type, classes, placeholder, data=""}) {
  return (
    <input 
        type={type}
        placeholder={placeholder}
        className={classes}
        value={data}
    />
  )
}
