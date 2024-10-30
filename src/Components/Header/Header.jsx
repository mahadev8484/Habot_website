import React from "react";
import './Header.css'

const Header = () => {
   return(
    <div className="header">
        <div className="Header-Text">
        <h1>Are You a Supplier?</h1>
        <h1 className="h12">Explore Matching Opportunities.</h1>
      <form className="form1">
        <input type="text" name="search" placeholder="Search your required service here"></input> 
        <input type="text" name="search" placeholder="Search your desired location here"></input> 
        <button className="btn2">Search</button>
      </form>
      <form className="form2">
        <h3>Are you a buyer? </h3>
        <a href="https://habot.io/">Click here if you are looking to post a requirements</a>
      </form>
        </div>

    </div>
   )
}

export default Header