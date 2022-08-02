import React, { useState } from 'react'
import img from '../asset/logo.jpg'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [openLinks, setopenLinks] = useState(false)
  const toggleNavbar = () => {
    setopenLinks(!openLinks)
  }
  const veTrangchu = () => {
    console.log(1);
    
  }
  return (
      <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <div className="logo-home" onClick={veTrangchu}>
              <img src={img} onClick={veTrangchu}/>

            </div>
            <div className="hiddenLinks">
              <Link to='/'>Home</Link>
              <Link to='/infor'>Thông tin</Link>
              <Link to='/member'>Tuyển Thành Viên</Link>
              <Link to='/contact'>Liên hệ</Link>
            </div>
        </div>
        <div className="rightSide">
            <Link to='/'>Home</Link>
            <Link to='/infor'>Thông tin</Link>
            <Link to='/member'>Tuyển Thành Viên</Link>
            <Link to='/contact'>Liên hệ</Link>
            <button onClick={toggleNavbar}>
              <ReorderIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar