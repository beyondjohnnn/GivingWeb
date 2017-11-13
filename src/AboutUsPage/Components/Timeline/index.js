import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'

import css from './Timeline.scss'


class Timeline extends React.Component {
  render() {
    return (
      <div className="timeline">
        <div className="timeline-header">
          <h2>Our Journey</h2>
        </div>
        <div className="main-wrapper">
          <div className="timeline-block">
            <div className="shadow-today"></div>  
            <div className="today-text">Today</div>  
            <div className="the-beginning-circle">
              <div className="the-beginning">
                <h2>THE</h2>
                <h3>Beginning</h3>
              </div>
              <h1>2015</h1>
            </div>  
          </div> 
          <div className="timeline-wrapper">
          <div className="timeline-asset">
            <div className="asset-arrow"></div>
            <div className="timeline-content">
            <h4 className="timeline-title">November 2017</h4>
            We rebuild (and rebrand) and set off on our mission to give even the smallest charities, the confidence and digital strategy needed to rocket online fundraising and engagement.
            </div>
            <div className="image-cover giving-web-image"> 
              <img src={"https://n6-img-fp.akamaized.net/free-vector/startup-rocket-launch_23-2147504814.jpg?size=338&ext=jpg&ve=1"} alt=""/>
            </div>
          </div>
            <div className="timeline-asset">
              <div className="asset-arrow"></div>
              <div className="timeline-content">
              <h4 className="timeline-title">April 2017</h4>
              Johnny immerses himself in 16 weeks of software development training at CodeClan and assembles a superstar team to rebuild the platform.  
              </div>
              <div className="image-cover"> 
                <img src={"https://pbs.twimg.com/profile_images/606015765700091905/dv5RE0l9_400x400.jpg"} alt=""/>
              </div>
            </div>
            <div className="timeline-asset">
              <div className="asset-arrow"></div>
              <div className="image-cover"> 
                <img src={"/images/streetchangelogo.png"} alt=""/>
              </div>
              <div className="timeline-content">
              <h4 className="timeline-title">February 2017</h4>
              We launch the beta of our platform and begin our pilot with Streetwork. We help support 20 people to share their story and raise money for basic needs.
              </div>
            </div>
            <div className="timeline-asset">
              <div className="asset-arrow"></div>
              <div className="image-cover giving-web-image"> 
                <img src={"/images/civtech.png"} alt=""/>
              </div>
              <div className="timeline-content">
              <h4 className="timeline-title">September 2016</h4>
              We are invited to participate in the CivTech accelerator in CodeBase, Edinburgh and join the first ever cohort.  
              </div>
            </div>
            <div className="timeline-asset">
              <div className="asset-arrow"></div>
              <div className="timeline-content">
              <h4 className="timeline-title">March 2016</h4>
              We form a close partnership with local homelessness charity Streetwork and begin planning the pilot of our member fundraising. 
              </div>
              <div className="image-cover"> 
                <img src={"./images/streetwork.jpg"} alt=""/>
              </div>
            </div>
            <div className="timeline-asset">
              <div className="asset-arrow"></div>
              <div className="timeline-content">
              <h4 className="timeline-title">November 2015</h4>
              Johnny first discovers his desire to drive social change with tech and wins a hackathon with a solution aimed at tackling homelessness.
              </div>
              <div className="image-cover"> 
                <img src={"https://pbs.twimg.com/profile_images/717306100312383488/f38LU5Cu.jpg"} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Timeline
