import React from 'react'
import Founders from './ContactUs/Founders'
import Form from './Form'
import './css/contactus.css'
import Footer from './Footer'
import Whatwedo from './ContactUs/Whatwedo'
import Investors from './ContactUs/Investors'

export default function Contactuspage() {
  return (
    <div className='contactuspage'>
        <Form/>
        <Founders/>
        <Whatwedo/>
        <Investors/>
        <Footer/>

    </div>
  )
}
