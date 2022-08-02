import React from 'react'
import ttv from '../asset/ttv.jpg'
import '../styles/member.css'
export default function Member() {
  return (
    <div className='contact'>
        <div className="leftSide">
            <img src={ttv} className='side-logo img1'/> 
        </div>
        <div className="rightSide">
            <h1 className='your-infor'>Thông Tin Của Bạn</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='Enter full name...' type="text"/>
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Enter email...' type="text"/>
                <label htmlFor='Message'>Message</label>
                <textarea name="message" rows="6" placeholder='Enter message...' required></textarea>
                <button type='submit'>Send</button>
                
            </form>
        </div>

    </div>
  )
}
