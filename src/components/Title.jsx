import React from 'react'
import '../App.css'
// function parameter takes as an object in export default wala function..
export default function Title({text, classes}) {
  return (
    <span className={classes}> {!text ? "Login" : text}</span>
  )
}
