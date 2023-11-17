import React from 'react'
import '../Footer/Footer.css';
import {BsInstagram} from 'react-icons/bs';
import {PiYoutubeLogoDuotone} from 'react-icons/pi';
import {BsFacebook} from 'react-icons/bs';
import {Divider} from 'antd';
function Footer() {
  return (
    <>
      <footer>
      <div className="footOne">
    <div className="boxOne">
      <h1>TV SERIES</h1>
      <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat voluptates rem nesciunt et laboriosam magnam numquam ipsam obcaecati quibusdam!</p>
    </div>
    <div className="boxThree">
        <h2>Follow</h2>
        <div className="icon">
          <BsInstagram className='ins'/>
          <PiYoutubeLogoDuotone className='you'/>
          <BsFacebook className='fac'/>
        </div>
      </div>
    </div>
    <Divider/>
    <p style={{textAlign:'center',paddingBottom:'5px',}}>©️ 2023 <strong style={{color:'#fb4848', textShadow:'5px 5px 10px #fb4848'}}>TV SERIES</strong> | All Right Reserved</p>
      </footer>
    </>
  );
}

export default Footer
