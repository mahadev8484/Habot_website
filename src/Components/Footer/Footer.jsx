import React from "react";
import './Footer.css';
import logo from "../../assets/logo2.png";

const Footer = () => {
   return(
      
      
         <div className="footer1">

             <div>

            <img src={logo} alt="" className="logo2" />
            <h2 className="owner">© R Singhania</h2>

            </div>

            <div className="footer2">
            <li>
               <ul className="fbold">Company</ul>
               <ul className="fnormal">About</ul>
               <ul className="fnormal">FAQ</ul>
            </li>
            <li>
               <ul className="fbold">Terms</ul>
               <ul className="fnormal">Data Privacy</ul>
               <ul className="fnormal">Terms</ul>
               <ul className="fnormal">Accessibility</ul>
            </li>
            <li>
               <ul className="fbold">Related</ul>
               <ul className="fnormal">Find Buyer</ul>
               <ul className="fnormal">Feedback</ul>
            </li>
            </div>

            <div className="footer3">
               <img className="social" src="linkdin.png"/>
               <img className="social" src="twitter.png"/>
               <img className="social" src="facebook.png"/>
               <img className="social" src="instagram.png"/>
            </div>

         </div>


   )
}

export default Footer;