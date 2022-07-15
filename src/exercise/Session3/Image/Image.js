import React, {useState} from 'react'
// import img from './img/1.jpg'
// import img from './img/2.jpg'
// import img from './img/3.jpg'
// import img from './img/4.jpg'
// import img from './img/5.jpg'


const dataImg = [1, 2, 3, 4, 5]
export default function Image() {
    const [imageIndex, setimageIndex] = useState(0)
  return (
    <>
    {dataImg.map((data, index) => {
      return (
        <div>{data[0]} </div>
      )
    })}
    <div
    onClick={() => setimageIndex(imageIndex+1)}>Click here:{imageIndex}</div>
    </>
  )
}
