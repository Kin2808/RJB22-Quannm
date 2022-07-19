import React from 'react'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';

export default function LikeHook() {
    const [isLike, setisLike] = React.useState(false)
  return (
    <div style={{textAlign:'center', fontSize: '200px'}} onClick={() => {
        setisLike(!isLike)
    }}>{isLike ? <AiOutlineLike/> : <AiFillLike/>}</div>
  )
}
