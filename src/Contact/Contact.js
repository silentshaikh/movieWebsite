import React from 'react'
import '../Contact/Contact.css';
function Contact() {
  return (
    <div className="cContOne">
  <form action="" className='fromMovie'>
    <label htmlFor="">Name</label>
    <input type="text" placeholder='Enter Your Name' required name="" id="" />
    <label htmlFor="">Email</label>
    <input type="email" placeholder='Enter Your Email' required name="" id="" />
    <label htmlFor="">Message</label>
    <textarea name="" placeholder='Enter Your Message' required id="" cols="30" rows="10"></textarea>
    <button>Submit</button>
  </form>
    </div>
  )
}

export default Contact
