// function component (phím tắt rfc)
import React from 'react'
import './Menu.css'

export default function Menu(props) {
  const {color, size} = props

  return (
    <div  className={`font-size-${size} ${color}`}>Menu {color} {size}</div> //style={{color : color, fontSize: size}}
  )
} 
