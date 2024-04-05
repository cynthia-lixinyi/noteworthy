import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <InstagramIcon />
            <FacebookIcon />
            <YouTubeIcon />
            <EmailIcon />
        </div>
        <></>
        <p>&copy; 2024 noteworthy.studentorg.berkeley.edu</p>
    </div>
  )
}

export default Footer
