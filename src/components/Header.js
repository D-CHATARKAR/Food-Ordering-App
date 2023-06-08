import {Link} from "react-router-dom";
import { useState } from "react";
const Title=()=>{
    return (
      <a href="/">
    <img className="logo"
     src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
     alt="logo"
     />
     </a>
  );
  };
  
  const HeaderComponent=()=>{

    const [isLogedIn,setIsLogedIn]=useState(false);
    return(
      <div className="header">
        <Title/>
        
        <div className="nav-items">
          <ul>
            
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us </Link></li>
            <li><Link to="cart">Cart</Link></li>
            
          </ul>
        </div>

        {
         isLogedIn? <button onClick={()=>setIsLogedIn(false)}>LogOut</button>
         :
         <button onClick={()=>setIsLogedIn(true)}>LogIn</button>
        }
      </div>

    );
  };

  export default HeaderComponent;