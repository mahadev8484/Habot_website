import React from "react";
import './Body4.css';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import TaskIcon from '@mui/icons-material/Task';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';

const Body4 = () => {
   return(
    <div className="middle2">

       <h1 className="hhh">How it works?</h1>
       <p>Buyers post their needs and review top suppliers, while 
          suppliers complete profiles, connect with <br/> 
          potential buyers,and build successful business 
          relationships, sharing valuable feedback.</p>
       
      <div className="box-container">

      <div className="boxes">
         <div className="box1"><h1 className="icons"><PersonAddAlt1Icon/></h1>Select Your Role and <br/> Sign Up</div>
         <div className="box2"><h1 className="icons"><TaskIcon/></h1>Buyers Post Your <br/> Requirements</div>
         <div className="box1"><h1 className="icons"><PlagiarismIcon/></h1>Review, Select, and <br/> Contact the Best Suppliers</div>
      </div>
            <br />
      <div className="boxes">
         <div className="box2"><h1 className="icons"><ManageAccountsIcon/></h1>Suppliers Complete your <br/> profile and get notified for <br/> opportunities</div>
         <div className="box1"><h1 className="icons"><SaveAsIcon/></h1>Contact to Buyers and Share <br/> your Quote for the service</div>
         <div className="box2"><h1 className="icons"><ThumbsUpDownIcon/></h1>Both the Parties can Connect <br/> and Make Business Leave a  Feedback</div>
      </div>    

      </div>

    </div>
   )
}

export default Body4