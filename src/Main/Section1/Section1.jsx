import React from 'react'
import image1 from "./image1.jpg";

const Section1 = () => {
  return (
    <section className='container'>
            <div className='row m-3'>
                <h2 className='col-8'>
                    <span className='fs-1 text-white'>CREATIVE</span>
                    <br />
                    <span className='fs-1 text-white'>DEVELOPER</span>
                </h2>
            </div>
            <div className='row m-3'>
                <div className='col-6'>
                    <img className='w-100' src={image1} alt="" />
                </div>
            </div>
            <div className='row m-3'>
                <div className='col-3'>
                    <span className='text-white'>↓</span>
                </div>
                <div className='col-3'>
                    <p className='text-white'>sajnjancmasmcdhfhsfba nanansnans nasnsanass</p>
                </div>
                <div className='col-lg-6'>
                    <h2>
                        <span className='fs-1 text-white'>CREATIVE</span>
                        <br />
                        <span className='fs-1 text-white'>DEVELOPER</span>
                    </h2>
                </div>
            </div>
    </section>
  )
}

export default Section1