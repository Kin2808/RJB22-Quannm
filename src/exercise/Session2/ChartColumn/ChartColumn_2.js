import React from 'react'
import './ChartColumn_2.css'

export default function ChartColumn_2(props) {
    const {color, text, percent} = props
   
  return (
    <div className='a'>
      <div style={{backgroundColor : `${color}`, width : `20px`, height: `${percent}px`}}></div> {/* className={`bgc---${color} w-${percent}`} */}
      <div className='txt-CC2'>{text}</div>
    </div>
  )
}
