import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'

import css from './Timeline.scss'


class Timeline extends React.Component {
  render() {
    return (
      <div className="timeline">
        <div className="timeline-header"></div>
        <div className="main-wrapper"></div>
      </div>
    )
  }
}

export default Timeline
