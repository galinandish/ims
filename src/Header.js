import React from 'react'
import "./Header.css"
//import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar'
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../ims/src/logo.png';




function Header() {
    return (
        <div className="header">
          <div className="header_right">
            <Avatar className="header_right_logo" alt="kushal" src="/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }} />
          </div>
   
                
            <div className="header_middle">
               
              <img src={Logo} className="Logo" alt="logo" />
                <h2>SRI SIDDARTHA INSTITUTE OF TECHOLOGY</h2><br />
                <h5 > (A Constituent Collage of Sri Siddaratha Academy of Higher Education) </h5>
                
            </div>
            
            <div className="header_menu">
          
              <MenuIcon className="burger_icon" />
            </div>
          </div>
       
        
   
       
       

    )
}

export default Header
