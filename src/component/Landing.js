import React, { Component } from 'react';
import CaneHandle from "../static/images/cane_handle.png";

class Landing extends Component {
   render() {
      return (
         <div>
            <div className="overlay"></div>
            {/* <div className="landingimage">
               <img src="https://ik.imagekit.io/bsvzrpqaj/Portfolio/NTW-Presentation_xM9k4p8cM.jpg" alt=""/>
            </div> */}

            <header>
               <div className="headertext container">
                  <h1>Innovating for the visually impaired.</h1>
                  <div className="cta-btn">
                     <a href="#about"><button>Learn How</button></a>
                     <a href="#team"><button>About Us</button></a>
                  </div>
               </div>
               <div className="headerimage">
                  <div className="handleimage">
                     <img src={CaneHandle} alt=""/>
                  </div>
               </div>
            </header>
         </div>
      )
   }
}

export default Landing;