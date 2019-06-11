import React, { Component } from 'react'
import Anum from "../static/images/Anum.jpg";
import David from "../static/images/David.jpg";
import Abby from "../static/images/Abby.jpg";
import Mike from "../static/images/Mike.jpg";

class Team extends Component {
   render() {
      return (
         <div>
            <h2 className="title container">The Team</h2>
            <div className="cards container">
               <div className="person">
                  <div className="avatar">
                     <img src={Anum} alt=""/>
                  </div>
                  <div className="details">
                     <h3>Anum Asif</h3>
                     <p>Founder & CEO</p>
                  </div>
               </div>
               <div className="person">
                     <div className="avatar">
                        <img src={David} alt=""/>
                     </div>
                     <div className="details">
                        <h3>David Dut</h3>
                        <p>Founder & CEO</p>
                     </div>
                  </div>

                  <div className="person">
                     <div className="avatar">
                        <img src={Abby} alt=""/>
                     </div>
                     <div className="details">
                        <h3>Abby Shabi</h3>
                        <p>Founder & CEO</p>
                     </div>
                  </div>

                  <div className="person">
                     <div className="avatar">
                        <img src={Mike} alt=""/>
                     </div>
                     <div className="details">
                        <h3>Michael Kipchumba</h3>
                        <p>Founder & CEO</p>
                     </div>
                  </div>
            </div>
            
         </div>
      )
   }
}

export default Team;
