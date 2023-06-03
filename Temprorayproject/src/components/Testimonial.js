import React from 'react'
import './css/testimonial.css'
import TestimonialCards from './TestimonialCards'

export default function Testimonial(props) {
  return (
    <div className='maincontainer'>
        <div className='titlebox'>
            <h3 className='title'> {props.title} </h3>
            <p className='para'> Learn it from the ones who have been on this journey already</p>
        </div>
        <div>
            <div>
                <TestimonialCards name = "Arman Garg"/>
            </div>
        </div>
    </div>
  )
}
