import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'

import css from './Timeline.scss'


class Timeline extends React.Component {
  render() {
    return (
      <div className="timeline">
        <div className="timeline-header"></div>
        <div className="main-wrapper">
          <div className="timeline-block"></div> 
          <div className="timeline-wrapper">
            <div className="timeline-asset">
              <div className="asset-arrow"></div>
              <div className="timeline-content">
              <h4 className="timeline-title">November 2015</h4>
              Our CEO Johnny took part in the Product Forge accelerator back in November '15, where he developed a concept for a point of sale technology.  This was aimed at supporting homeless people and thus his enthusiasm for driving social change with tech was born.
              </div>
              <div className="image-cover"> 
                <img src={"https://pbs.twimg.com/profile_images/717306100312383488/f38LU5Cu.jpg"} alt=""/>
              </div>
            </div>
            <div className="timeline-asset">
              <div className="asset-arrow"></div>
              <div className="image-cover"> 
                <img src={"https://pbs.twimg.com/profile_images/717306100312383488/f38LU5Cu.jpg"} alt=""/>
              </div>
              <div className="timeline-content">
              <h4 className="timeline-title">November 2015</h4>
              Our CEO Johnny took part in the Product Forge accelerator back in November '15, where he developed a concept for a point of sale technology.  This was aimed at supporting homeless people and thus his enthusiasm for driving social change with tech was born.
              </div>
            </div>
            <div className="timeline-asset">
              <div className="asset-arrow"></div>
              <div className="timeline-content">
              <h4 className="timeline-title">November 2015</h4>
              Our CEO Johnny took part in the Product Forge accelerator back in November '15, where he developed a concept for a point of sale technology.  This was aimed at supporting homeless people and thus his enthusiasm for driving social change with tech was born.
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
