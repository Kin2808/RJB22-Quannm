import React from 'react'
import './Home.css'
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.jpg'

export default function Home() {
  return (
    <div style={{backgroundColor: '#333'}} className='col-10'>
      <div className='row'>
      <div className='col-sm-6'><img style={{width: '95%'}} src={img1}/></div>
      <div className='col-sm-6'><img style={{width: '95%'}} src={img6}/><img style={{width: '95%'}} src={img2}/></div>
      <div className='col-sm-6'><img style={{width: '95%'}} src={img2}/><img style={{width: '95%'}} src={img4}/></div>
      <div className='col-sm-6'><img style={{width: '95%'}} src={img5}/></div>
      <div className='col-sm-6'><img style={{width: '95%'}} src={img3}/></div>
      <div className='col-sm-6'><img style={{width: '95%'}} src={img4}/></div>
      </div>

      <div className='row'>

      </div>
    </div>
  )
}
