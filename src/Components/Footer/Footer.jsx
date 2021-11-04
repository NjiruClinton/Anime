import React from 'react'
import "./footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
    return (
        <div className="content">
            <a href="https://www.facebook.com/clinton.njiru.1/"><FacebookIcon className="icon"/></a>
            <a href="https://twitter.com/njiru_clinton"><TwitterIcon className="icon"/></a>
            <a href="https://www.instagram.com/kenyan_dinero_/"><InstagramIcon className="icon"/></a>
            <a href="mailto:njituclinton56@gmail.com"><EmailIcon className="icon"/></a>
            <CopyrightIcon className="icon"/>
            
        </div>
    )
}
