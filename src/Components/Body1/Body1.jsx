import React from "react";
import "./Body1.css";

const Body1 = () => {
  return (
    <div className="container2">
      <div className="div1">
        <h1 className="bodyheading">
          Ready to div into <h1 className="headingh1">HABOT?</h1>{" "}
        </h1>
        <p>
          Signing up with HABOT opens the door to a world of new opportunities{" "}
          <br></br>
          and potential for business growth. Gain access to a vibrant community.
          <br></br>
          of like-minded individuals, unlock valuable resources, and take the
          first <br></br>
          step towards realizing your entrepreneurial dreams.
        </p>
        <br />
        <button className="btn3">Sign up Today!</button>
      </div>

      <div className="div2">
        <li className="list">
          <ul className="btns1">
            <button>Abu Dhabi</button><br></br><br></br>
            <button>sharjah & Ajman</button><br></br><br></br>
            <button>Ras Al Khaimah</button><br></br>
          </ul>

          <ul className="btns1">
            <button>Dubai</button><br></br><br></br>
            <button>Fujairah</button><br></br><br></br>
            <button>Umm Al Quwain</button>
          </ul>
        </li>
      </div>
    </div>
  );
};

export default Body1;
