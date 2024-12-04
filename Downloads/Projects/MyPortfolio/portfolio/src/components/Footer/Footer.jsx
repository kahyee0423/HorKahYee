import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <img className="profileLogo" src={`${process.env.PUBLIC_URL}/assets/generalPic/Name2.png`} alt="" />
      Copyright &copy; 2024 by Hor Kah Yee. All Rights Reserved.
    </div>
  )
}

export default Footer;