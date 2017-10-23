import React, {Component} from 'react'

import css from './Pricing.scss'

import PricingFeature from '../PricingFeature'

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
            <div className="main-info-pricing-wrapper">
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
            <div className="pricing-features">  
              <PricingFeature uniqueID="campaigns" text="Unlimited fundraising campaigns" tooltipText="As many of our high converting fundraising campaigns as you like"/>
              <PricingFeature uniqueID="members" text="Member fundraising" tooltipText="Our member fundraising is available to all human service organisations fighting inequality"/>
              <PricingFeature uniqueID="starter-service" text="5% service fee" tooltipText="This fee allows us to innovate and make GivingWeb even better!"/>
              <PricingFeature uniqueID="starter-payment" text="1.4% + 20p payment processing fees" tooltipText="This is the fee our payment processing provider Stripe takes per transaction"/>
              <PricingFeature uniqueID="donors" text="Donors can cover fees" tooltipText="This feature allows you to decide if the donor will pick up our small fees or if they are covered in the target. We're always transparent to donors about our fees either way!"/>
            </div>
          </div>
          <div className="pricing-tier-wrapper">
            <div className="main-info-pricing-wrapper recommended">
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
              <h3 className="plus-more-text">Everything in Starter, plus:</h3>
             </div> 
             <div className="pricing-features growth-features">
              <PricingFeature uniqueID="promo" text="Extra promotion tools" tooltipText="Tools like our converting email templates allow your organisation to gain momentum from the get go."/>
              <PricingFeature uniqueID="mastermind" text="Access to mastermind community" tooltipText="Up to two representatives from your organisation will be invited to our Facebook digital marketing community, where we share the latest and greatest techniques for successful fundraising and digital engagement."/>
              <PricingFeature uniqueID="growth-service" text="Reduced 3% service fee" tooltipText="This reduced fee allows you to raise even more with each donation."/>
              <PricingFeature uniqueID="growth-payment" text="1.4% + 20p payment processing fees" tooltipText="This is the fee our payment processing provider Stripe takes per transaction."/>
              <PricingFeature uniqueID="gift aid" text="Gift aid reclaim" tooltipText="We'll reclaim gift aid on your behalf and won't take a penny of it!"/>
             </div>
          </div> 
          <div className="pricing-tier-wrapper">
            <div className="main-info-pricing-wrapper">
              <div className="pricing-color-banner custom"></div>
              <h3 className="tier-name">Custom</h3>
              <h3 className="tier-description">Experienced fundraisers and software developers at your service.</h3>
              <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
              <button className="custom-button">Get in touch</button>
            </div>
            <div className="pricing-features">  
              <PricingFeature uniqueID="marketing-strategy" text="Personalised Marketing Strategy" tooltipText="We know boosting engagement online can be overwhleming at times. We're here to help with dedicated marketing support for your organisation."/>
              <PricingFeature uniqueID="eliminate" text="Eliminate Service Fees" tooltipText="We cater for organisations of all size.  If your organisation is expecting significant volume, we can talk about custom upfront packages to do away with our fee altogether."/>
              <PricingFeature uniqueID="custom-fundraising" text="Custom fundraising solutions" tooltipText="Do you have an idea you'd like to implement on your own website?  Maybe a further integration with ours?  We're here to help."/>
            </div>
          </div> 
        </div>
      </div>
    )
  }
}

export default Pricing