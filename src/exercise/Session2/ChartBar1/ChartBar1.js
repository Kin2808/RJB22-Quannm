import React from 'react'
import '../ChartBar1/ChartBar1.css'

export default function ChartBar1(props) {
    const {text, color1, colors, percentage} = props
    return (
    <>
    <div className='ChartBar-main'>
        <span className={`background-${color1} txt`}>{text}</span>
        <span className={`background-${colors} perc`}>{percentage}%</span>
    </div>
    </>
  )
}