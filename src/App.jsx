import Body1 from "./Components/Body1/Body1";
import Body2 from "./Components/Body2/Body2";
import Body3 from "./Components/Body3/Body3";
import Body4 from "./Components/Body4/Body4";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import { Tabs } from "@mui/material";

function App(){
  return (
    <div>
      <Navbar/>
      <Header/>
      <Body1/>
      <Body2/>
      <Body3/>
      <Body4/>
      <Footer/>
    </div>
  )
}

export default App;