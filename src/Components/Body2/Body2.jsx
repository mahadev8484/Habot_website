import React from "react";
import "./Body2.css";
import youtube from "../../assets/youtube.jpg";
import {Tabs, Tab, Container} from "@mui/material";

export default function Body2(){
    const [value,setValue]=React.useState(0)
    const handleTabs=(e,val)=>{
      console.warn(val)
      setValue(val)
}
  return (
    <form className="card1">
      <div>
      <img src={youtube} className="ytphoto"/>
      </div>

       <div className="tbs">
        <Tabs value={value} onChange={handleTabs}>
          <Tab label="Buyer" />
          <Tab label="Supplier" />
        </Tabs>
     
      <TabPanel value={value} index={0}><h3 className="h33">Post your requirements. <br/>
                                        Sit back for multiple suppliers to contact you. <br/>
                                        Choose among the suppliers based on the  <br/>
                                        ratings and reviews.</h3></TabPanel>
      <TabPanel value={value} index={0}></TabPanel>
      </div>
    </form>
  );
};

function TabPanel(props)
{
   const {children}=props;

  return(<div>
    <h1>{children}</h1>
  </div>
  )
}
