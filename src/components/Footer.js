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
            <a href="https://www.instagram.com/cal_noteworthy/" target="__blank"><InstagramIcon /></a>
            <a href="https://www.facebook.com/Noteworthy/" target="__blank"><FacebookIcon /></a>
            <a href="https://www.youtube.com/@UCBNoteworthy" target="__blank"><YouTubeIcon /></a>
            <a href="mailto:noteworthy@ucchoral.berkeley.edu" target="__blank"><EmailIcon /></a>
        </div>
        <></>
        <p>&copy; 2024 noteworthy.studentorg.berkeley.edu</p>
    </div>
  )
}

export default Footer
