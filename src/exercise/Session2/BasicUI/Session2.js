import React from 'react'
import '../BasicUI/Session2.css'
// import img1 from '../BasicUI/img/1.jpg'
import img2 from '../BasicUI/img/2.jpg'
// import img3 from '../BasicUI/img/3.jpg'

export default function Session2() {
    return (
    <>
    {/* <div className='basic-1'>        
        <img src={img1} alt='1'></img>
        <div>
            <h3>Clothing & Apparel</h3>
            <p>Accessories</p>
            <p>Bags</p>
            <p>Kid's Fashion</p>
            <p>Mens</p>
        </div>
    </div> */}

    <div className='basic-2'>
        <img src={img2} alt='2'></img>
        <div className='basic-2-txt'>
            <p className='border-bottom'>YOUNG SHOP</p>
            <p className='blue'>Samsung UHD TV 24inch</p>
            <div className='basic-2-icon'>
            <i class="fa-solid fa-star yellow"></i>
            <i class="fa-solid fa-star yellow"></i>
            <i class="fa-solid fa-star yellow"></i>
            <i class="fa-solid fa-star yellow"></i>
            <i class="fa-regular fa-star"></i>
                02
            </div>
            <p className='font-weight'>$599</p>
        </div>
    </div>

    {/* <div className='basic-3'>
        <img src={img3} alt='3'></img>
        <div className='basic-3-txt'>
            <p>Technology</p>
            <h3 className='mt-30'>Harma Kadon Onyx Studio Mini, </h3> 
            <h3 className='mb-30'>Reviews & Experiences</h3>
            <p>Feb 21, 2021 by drfurion</p>
        </div>
    </div> */}

    
    </>
  )
}