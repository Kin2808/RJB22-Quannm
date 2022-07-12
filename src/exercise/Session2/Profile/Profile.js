import React from 'react'
import './Profile.css'

export default function Profile(props) {
    const {IconName, Name, color, likes} = props

  return (
    <>
    <div className='Profile-main'>
    <span className={`iconpro bgc-${color}`}>{IconName}</span>
    <span className='txtpro'>{Name}</span>
    <span className={`prog bgc-${color} width-${likes}`}></span>
    </div>
    </>
  )
}