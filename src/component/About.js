import React, { Component } from 'react';

class About extends Component {
   render() {
      return (
         <div id="about" className="otherpage">
            {/* <div className="headerimage container">
               <div className="brailleimage">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 271.72 207.93"><title>Asset 3</title><g id="Layer_2" data-name="Layer 2"><g id="joined"><path d="M2.86,17.9A10,10,0,0,1,0,10.41,10.19,10.19,0,0,1,2.86,2.86,10.19,10.19,0,0,1,10.41,0,10.19,10.19,0,0,1,18,2.86a10.19,10.19,0,0,1,2.86,7.55A10.19,10.19,0,0,1,18,18a10.19,10.19,0,0,1-7.54,2.86A10.64,10.64,0,0,1,2.86,17.9Zm0,62.23A10,10,0,0,1,0,72.64a9.67,9.67,0,0,1,2.86-7.39,10.55,10.55,0,0,1,7.55-2.71A10.55,10.55,0,0,1,18,65.25a9.67,9.67,0,0,1,2.86,7.39A10.17,10.17,0,0,1,18,80.18a10.19,10.19,0,0,1-7.54,2.87A10.69,10.69,0,0,1,2.86,80.13Zm31.22-31a10,10,0,0,1-2.86-7.49A9.83,9.83,0,0,1,41.63,31.22,9.83,9.83,0,0,1,52,41.63,9.83,9.83,0,0,1,41.63,52,10.64,10.64,0,0,1,34.08,49.12Z"/><path d="M85.91,17.9A10,10,0,0,1,83,10.41a10.2,10.2,0,0,1,2.87-7.55,11.38,11.38,0,0,1,15.09,0,10.23,10.23,0,0,1,2.86,7.55A10.23,10.23,0,0,1,101,18a10.21,10.21,0,0,1-7.55,2.86A10.61,10.61,0,0,1,85.91,17.9Zm0,62.23A10,10,0,0,1,83,72.64a9.68,9.68,0,0,1,2.87-7.39,10.53,10.53,0,0,1,7.54-2.71A10.57,10.57,0,0,1,101,65.25a9.71,9.71,0,0,1,2.86,7.39A9.84,9.84,0,0,1,93.45,83.05,10.66,10.66,0,0,1,85.91,80.13Zm31.22-.1a10,10,0,0,1-2.87-7.5,9.66,9.66,0,0,1,2.87-7.38,11.86,11.86,0,0,1,15.09,0,9.69,9.69,0,0,1,2.86,7.38,9.83,9.83,0,0,1-10.41,10.41A10.66,10.66,0,0,1,117.13,80Z"/><path d="M169.26,18.11a10,10,0,0,1-2.86-7.5,10.19,10.19,0,0,1,2.86-7.54,11.38,11.38,0,0,1,15.09,0,10.19,10.19,0,0,1,2.86,7.54,10.19,10.19,0,0,1-2.86,7.55A10.19,10.19,0,0,1,176.81,21,10.7,10.7,0,0,1,169.26,18.11Zm0,31.22a10,10,0,0,1-2.86-7.5,10.41,10.41,0,1,1,20.81,0,9.83,9.83,0,0,1-10.4,10.41A10.7,10.7,0,0,1,169.26,49.33Zm0,30.8a10,10,0,0,1-2.86-7.49,9.36,9.36,0,0,1,2.86-7.29,12.25,12.25,0,0,1,15.09,0,9.36,9.36,0,0,1,2.86,7.29,9.84,9.84,0,0,1-10.4,10.41A10.7,10.7,0,0,1,169.26,80.13Zm31.22-30.8a10,10,0,0,1-2.86-7.5,10.41,10.41,0,1,1,20.81,0A9.83,9.83,0,0,1,208,52.24,10.7,10.7,0,0,1,200.48,49.33Z"/><path d="M10.72,146.11a10.7,10.7,0,0,1-7.55-2.91,10.08,10.08,0,0,1-2.86-7.5,10.23,10.23,0,0,1,2.86-7.54,10.21,10.21,0,0,1,7.55-2.86,10.19,10.19,0,0,1,7.54,2.86,11.35,11.35,0,0,1,0,15.09A10.19,10.19,0,0,1,10.72,146.11Zm0,31.22a10.7,10.7,0,0,1-7.55-2.91,10.08,10.08,0,0,1-2.86-7.5,10.23,10.23,0,0,1,2.86-7.54,10.21,10.21,0,0,1,7.55-2.86,10.19,10.19,0,0,1,7.54,2.86,11.35,11.35,0,0,1,0,15.09A10.19,10.19,0,0,1,10.72,177.33Zm31.22-31.22a10.7,10.7,0,0,1-7.55-2.91,10.08,10.08,0,0,1-2.86-7.5,9.83,9.83,0,0,1,10.41-10.4,10.41,10.41,0,1,1,0,20.81Zm0,31.22a10.7,10.7,0,0,1-7.55-2.91,10.08,10.08,0,0,1-2.86-7.5,9.83,9.83,0,0,1,10.41-10.4,10.41,10.41,0,1,1,0,20.81Z"/><path d="M93.87,145.69a10.64,10.64,0,0,1-7.55-2.91,10,10,0,0,1-2.86-7.49,10.68,10.68,0,1,1,10.41,10.4Zm0,62.24A10.69,10.69,0,0,1,86.32,205a10,10,0,0,1-2.86-7.49,9.67,9.67,0,0,1,2.86-7.39,10.55,10.55,0,0,1,7.55-2.71,10.55,10.55,0,0,1,7.54,2.71,9.67,9.67,0,0,1,2.86,7.39,9.84,9.84,0,0,1-10.4,10.41Zm31.22-31a10.64,10.64,0,0,1-7.55-2.91,10,10,0,0,1-2.86-7.49,10.68,10.68,0,1,1,10.41,10.4Z"/><path d="M177.33,145.07a10.7,10.7,0,0,1-7.55-2.91,10,10,0,0,1-2.86-7.5,10.68,10.68,0,1,1,10.41,10.41Z"/><path d="M261.31,145.69a10.65,10.65,0,0,1-7.55-2.91,10,10,0,0,1-2.86-7.49,10.68,10.68,0,1,1,10.41,10.4Zm0,31.22a10.65,10.65,0,0,1-7.55-2.91,10,10,0,0,1-2.86-7.49,10.68,10.68,0,1,1,10.41,10.4Zm0,30.81a10.66,10.66,0,0,1-7.55-2.92,10,10,0,0,1-2.86-7.49,9.32,9.32,0,0,1,2.86-7.28,12.21,12.21,0,0,1,15.09,0,9.33,9.33,0,0,1,2.87,7.28,9.86,9.86,0,0,1-10.41,10.41Z"/></g></g></svg>
               </div>
            </div> */}
            <div className="text container">
               <h2>Our Goal</h2>
               <p>We are on a mission to create a smart cane to help the visually impaired navigate easily. We have managed to create a prototype that detects objects up to a distance of 2 metres and, through an earpiece, tell them what object it is.</p>
            </div>
         </div>
      )
   }
}

export default About;