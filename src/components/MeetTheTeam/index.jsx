import React from 'react'
import { Link } from 'react-router-dom'

import css from './MeetTheTeam.scss'

class MeetTheTeam extends React.Component {


	render() {

		return (
			<div className="meet-the-team">
        <img className="team-photo" src="images/team_placeholder.png"></img>
        <div className="text-body">
          <div className="mission">
            <h2>About our team</h2>
            <p>Since spinning out from a winning hackathon in late 2015, Johnny decided to push forward with StreetChange fundraising and got on his way to find a scaling partner and some funding to get the project off the ground.  We’ve since built a strong relationship with Streetwork, received grant funding from the Scottish Government and are reaching the end of a daring, new public sector accelerator in CodeBase.  With a broad range of skills and knowledge and growing support in Edinburgh and beyond, the team can’t wait to drive the project forward to success in 2017.
            </p>
          </div>
          <div className="team-member">
            <div className="profile">
              <img width="833" height="826" src="https://streetchange.org.uk/wp-content/uploads/2016/12/J.jpg" ></img>
            </div>
            <div className="bio">
              <h3>Johnny Watson</h3>
              <h5>Founder &amp; CEO</h5>
              <p className="team-member-box">Johnny likes thinking big and is passionate about how collaboration and technology can be used to create meaningful change. This is true for the lives of those in need, the communities we all live in and for the charitable giving process as a whole. &nbsp;Johnny is determined that by pushing innovation within the third sector, we can create a more transparent and rewarding experience for donors whilst increasing social impact. With experience in civil engineering, events management and sales/marketing, his background really is varied. However he has been fully committed since 2015 to learning the issues surrounding homelessness, and embarked on a unique opportunity to drive StreetChange forward on the CivTech accelerator full time in Autumn 2016.</p>
            </div>
          </div>
          <div className="team-member">
            <div className="profile">
              <img width="833" height="826" src="https://streetchange.org.uk/wp-content/uploads/2016/12/B.jpg" ></img>
            </div>
            <div className="bio">
              <h3>Bella Combest</h3>
              <h5>Content Lead &amp; COO</h5>
              <p className="team-member-box">Bella focuses on maintaining the integrity of our core values while ensuring the highest, positive community impact. She heads our community engagement efforts and raises awareness of our mission in the digital world. Prior to StreetChange, Bella worked on a variety of social justice projects, including immigrant defense, human rights advocacy, and food sustainability. She culminated her efforts with a published research dissertation titled “The Dark Side of Compassion: How We Hurt Those We Help”. Bella graduated with honors from the University of CO Boulder with a B.A. in The Philosophy of Values and Social Policy.</p>
            </div>
          </div>
          <div className="team-member">
            <div className="profile">
              <img width="833" height="826" src="/images/GWeoghan.png" ></img>
            </div>
            <div className="bio">
              <h3>Eoghan Crowley</h3>
              <h5>Lead Developer</h5>
              <p className="team-member-box">did somethings...</p>
            </div>
          </div>
          <div className="team-member">
            <div className="profile">
              <img width="833" height="826" src="/images/GWreece.png" ></img>
            </div>
            <div className="bio">
              <h3>Reece Jones</h3>
              <h5>Developer</h5>
              <p className="team-member-box">did lots of things...</p>
            </div>
          </div>


          <div className="investor">
          </div>
        </div>
      </div>
		)
	}
}

export default MeetTheTeam
