import React from 'react'
import '../styles/footer.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
// import TiktokIcon from '@mui/icons-material/Tik'

export default function footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <FacebookIcon/>  <InstagramIcon/> <TwitterIcon/> 
        </div>
        <p>&copy; 2022 streetworkoutptit.com</p>
    </div>
  )
}
