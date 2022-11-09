import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import React from 'react'
import "./Login.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Login() {
    return (
        <div className="container">
         
            <form id="form" action="/"> 
            <h1>Sign in to Site</h1>         
                <div className="input-ctrl">
                    <label for="username"><PersonIcon />&nbsp;</label>
                    <input id="username" name="username" type="text" placeholder="username" required></input>
                </div>
                <div className="input-ctrl">
                    <label for="username"><LockIcon />&nbsp;</label>
                    <input id="password" name="password" autocomplete="off" type="password" placeholder="password" required></input>
                </div>
             
                <a  className="frt-pass"  href="/">forgot password?</a>   
                <button type="submit">login</button>
                <div className="icons">
                   <div className="ins-icon">
                    <a  href="/"><InstagramIcon /></a>
                   </div>
                   <div className="fb-icon">
                    <a  href="/"><FacebookIcon /></a>
                   </div>
                </div>
                
                    

                   

            </form>
        </div>
    )
}

export default Login
