import React from 'react'
import './SocialBlock.css'

export default function SocialBlock(props) {
    const {text, color, iconName, total, unit} = props
  return (
    <>
    <div className={`SB-main bgc--${color}`}>
        <div className='iconSB'>{iconName}</div>
        <div className='txtSB-main'>
            <div className='txtSB'>{text}</div>
            <div className='totalSB'>{total} {unit}</div>
        </div>
    </div>
    </>
  )
}
