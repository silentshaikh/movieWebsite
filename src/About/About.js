import React from 'react'
import abVideo from '../1712075980.mp4';
import '../About/About.css';
import Image from '../couple-embracing-looking-projector-cinema_7502-9331.avif';
import HomeSign from '../Home/HomeSign';
function About() {
  return (
   <>
    <div className="aboutVideo">
      <video  autoPlay loop muted>
  <source src={abVideo}  type="video/mp4"/>
</video>
    </div>
    <div className="aboutCont">
      <div className="aBox1">
        <h1>Our Cinema</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti accusamus, fuga odit rem excepturi omnis cupiditate beatae ipsa iste tempora hic commodi fugit? Neque suscipit doloremque, adipisci tempore repellat numquam quis sequi placeat? Obcaecati qui sed atque, doloribus eius accusantium.</p>
      </div>
      <div className="abox2">
        <img src={Image} alt="aboutImage" />
      </div>
    </div>
    <HomeSign/>
   </>
  )
}

export default About;
