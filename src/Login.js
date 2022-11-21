import React from 'react'
import "./Login.css"
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import InstagramIconlog from '@mui/icons-material/Instagram';
import FacebookIconllog from '@mui/icons-material/Facebook';
import shadows from '@mui/material/styles/shadows';
import Logo from '../../ims/src/logo.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIconforlog from '@mui/icons-material/GitHub';



function Login() {
    return (
        <div className="container">
            
                <div className='cnt-head'>
             
                    <div className='icons'>
                     <div className="ins-icon">
                           <a  href="/"><InstagramIconlog  sx={{fontSize:"30px"}}/></a>
                     </div>
                      <div className="fb-icon">
                       <a  href="www.facebook.com"><FacebookIconllog sx={{fontSize:"30px"}}/></a>
                      </div>
                      <div className="lkdin-icon">
                           <a  href="www.linkedin.com"><LinkedInIcon sx={{fontSize:"30px"}}/></a>
                      </div>
                      <div className="git">
                           <a  href="https://github.com/galinandish/ims"><GitHubIconforlog sx={{fontSize:"30px"}}/></a>
                      </div>
                </div>
                </div>
        
         
            <form id="form" action="/"> 
           <a href="https://ssit.edu.in/"><img src={Logo} className="Logo" alt="logo" /></a>
            <h1>Sign in to Site</h1>         
                <div className="input-ctrl">
                    <label className="username"><PersonIcon style={{background:'#ffff'}} />&nbsp;</label>
                    <input id="username" name="username" type="text" placeholder="username" required></input>
                </div>
                <div className="input-ctrl">
                    <label className="password"><LockIcon style={{background:'#ffff'}}/>&nbsp;</label>
                    <input id="password" name="password" autocomplete="off" type="password" placeholder="password" required></input>
                </div>
             
                <a  className="frt-pass"  href="/">forgot password?</a>   
                 <button type="submit">LOGIN    </button>
             </form>
               
                
                 
                 
                
                    

                   

            
        </div>

    )
}

export default Login
