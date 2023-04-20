import React from 'react'
import logo from '../img/logo.png'

export default function Footer() {
  return (
    <>
       <div className='footer'>
                <div className='logoset'>
                    <img src={logo} className='logo'></img>
                    <div className='logoname'>SHIVEEN DESIGN</div>
                    <div className='logoDescription'>we design your dreams</div>
                </div>
                <div className='footersec'>

                    <div className='part1'>
                        <div className='mainhead'>Get In Touch</div>
                        <div id='subtopic'>Whatsapp</div>
                        <div id='subtopic'>Instagram</div>
                        <div id='subtopic'>Twitter</div>
                    </div>

                    <div className='part1'>
                        <div className='mainhead'>Contact Info</div>
                        <div id='subtopic'>Whatsapp</div>
                        <div id='subtopic'>Instagram</div>
                        <div id='subtopic'>E-mail</div>
                    </div>

                </div>


            </div>
    </>
  )
}
