import React from 'react'
import '../Session2/ChartColumn.css'
import ChartColumn_2 from './ChartColumn_2'

export default function ChartColumn(props) {
    const {text, total, unit, percentages} = props
    console.log(percentages)
    let test= [{
      color: 'red',
      text: 'MON',
      percent: percentages[0],
    },
    {
      color: 'yellow',
      text: 'THU',
      percent: percentages[1],
    },
    {
      color: 'blue',
      text: 'TUE',
      percent: percentages[2],
    },
    {
      color: 'green',
      text: 'WED',
      percent: percentages[3],
    },
    {
      color: 'orange',
      text: 'FRI',
      percent: percentages[4],
    },
  ]
  console.log(test);
    
  return (
    <>
    <div className='ChartColumn-main'>
      <div className='txt-CC'>
        <div className='font-size14'>{text}</div>
        <div className='font-size50'>{unit}{total}</div>
      </div>
      {/* <div className='a'>
        <ChartColumn_2 color='red' text='MON' percent={percentages[0]}></ChartColumn_2>
        <ChartColumn_2 color='green' text='TUE' percent={percentages[1]}></ChartColumn_2>
        <ChartColumn_2 color='yellow' text='WED' percent={percentages[2]}></ChartColumn_2>
        <ChartColumn_2 color='blue' text='THU' percent={percentages[3]}></ChartColumn_2>
        <ChartColumn_2 color='orange' text='FRI' percent={percentages[4]}></ChartColumn_2>
      </div> */}
      {/* {percentages.map((chart,index)=>(<ChartColumn_2 percent={chart} key={index}/>))} */}
      <div className='Chart-info'>
      {test.map((chart,index)=>(<ChartColumn_2 color={chart.color} text={chart.text} percent={chart.percent} key={index}/>))}
      </div>
    </div>
    </>
  )
}
