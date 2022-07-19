import React from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

export default function RateHook() {
    const [stars, setStars] = React.useState(0)
    let arrayStar = [1, 2, 3, 4 ,5]
  return (
    <div style={{textAlign: 'center', fontSize: '200px'}}>{arrayStar.map((data, index) => {
        if (data <= stars) {
            return (
                <AiFillStar key={index} onClick={() => {
                    setStars(data)
                }}/>   
            )
        }
        return (
            <AiOutlineStar key={index} onClick={() => {
                setStars(data)
            }}/>
        )
    })}</div>
  )
}
