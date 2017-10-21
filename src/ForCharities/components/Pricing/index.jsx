import React, {Component} from 'react'

import css from './Pricing.scss'

class Pricing extends Component {
  render() {
    return (
      <div className="pricing">
        <div className="pricing-header">
          <h2>Flexible and transparent pricing</h2>
          <p>Plans for your organisation, no matter the size</p>
        </div>
        <div className="pricing-main-wrapper">
          <div className="pricing-tier-wrapper">
            <div className="pricing-color-banner"></div>
            <h3 className="tier-name">Starter</h3>
            <h3 className="tier-description">Our free subscrition.</h3>
            <div className="price-container">
              <div className="pound-symbol">£</div>
              <div className="price-number">0</div>
              <div className="per-month-text">/mo</div>
            </div>
            <h3 className="below-price-message">For the entire organisation</h3>
            <button>Get started</button>
          </div>
          <div className="pricing-tier-wrapper recommended">
            <div className="recommended-banner">
              <h4>Recommended</h4>
            </div> 
            <h3 className="tier-name growth-tier-color">Growth</h3>
            <h3 className="tier-description">Our value packed plan designed to supercharge your impact.</h3>
            <div className="price-container">
              <div className="pound-symbol">£</div>
              <div className="price-number">15</div>
              <div className="per-month-text">/mo</div>
            </div>
            <h3 className="below-price-message">For the entire organisation</h3>
            <button className="recommended-button">Start free trial</button>
          </div> 
          <div className="pricing-tier-wrapper">
            <div className="pricing-color-banner custom"></div>
            <h3 className="tier-name">Custom</h3>
            <h3 className="tier-description">Experienced fundraisers and software developers at your service.</h3>
            <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
            <button className="custom-button">Get in touch</button>
          </div> 
        </div>
      </div>
    )
  }
}

export default Pricing