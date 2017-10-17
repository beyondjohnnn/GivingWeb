import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

import css from './TermsAndPrivacyPage.scss'

class TermsAndPrivacyPage extends React.Component {

	componentDidMount() {
	}

	createComments() {
	}

	render() {

		return (
			<div className="terms-and-privacy-page">
        <div className="terms-and-privacy">
	        <div className="content">
	          <h2>Terms of Service</h2>
	          <p>Our terms of service describe what Streetchange does for you and the individuals and charities you support, and what we kindly request of you as</p>
	          <p>Here are the key points:</p>
	          <ul>
	            <li>Online Giving&nbsp;– we run and maintain a website that markets and receives donations on behalf of the individuals and charities featured on it. For this service, and the support we provide to them, charities pay us a transaction fee of up to 10% on the donation. Because we promptly pay donations to charities and other good causes, we regret that we can only refund a donation in exceptional circumstances, as described below.</li>
	            <li>Data Protection&nbsp;– Your privacy is paramount to us. Our&nbsp;Privacy Policy at the bottom of this page shows you how we protect it.</li>
	            <li>User Conduct&nbsp;– We moderate comments that are made anywhere on the Streetchange website, and we will remove offensive, obscene or racist content, on the rare occasion we find it– and we may terminate membership as a result.</li>
	          </ul>
	          <p>That’s it. If you want the full, extended version, here it is:</p>
	          <p>&nbsp;</p>
	          <p>The local Streetchange entity and the company who provides the service to you is Streetchange Limited (registration no. SC523372), whose registered office is 60/5 Haymarket Terrace, Edinburgh, EH12 5LA, United Kingdom.</p>
	          <p>Streetchange operates www.Streetchange.com.uk (the “Website”) and its associated services. These core terms of govern your use of the Website and its associated services. Please read these Terms of Service carefully. If you do not wish to be bound by these Terms of Service, you should not continue to use or access the Website or its associated services.</p>
	          <p>These Terms of Service may change or be updated from time to time. It remains your responsibility to access and check these Terms of Service wherever you access the Website. The latest version of these Terms of Service will govern any future usage by you of the Website and its associated services.</p>
	          <p>About the charities, good causes and organisations featured on the Website</p>
	          <p>The Website and its associated services allows you to donate to any of the individuals (“Members”) or causes (‘’Funds’’) listed on the Website, which could include charities and other listed organisations. Every member or organisation featured has a contractual agreement with Streetchange and authorising Streetchange to collect donations on their behalf. &nbsp;Members are listed on this Website at Streetchange’s discretion, however we cannot accept responsibility for the activities of the member’s. A charity must have the appropriate authorisation, permit or licence to operate as a charity, as required by the local laws of the territory in which it operates. You should note that Streetchange members pages are not intended to raise money for charities, all funds minus our 10% service fee that we pass to charities will reach the intended member.</p>
	          <p>Donations</p>
	          <p>Subject to the requirements of applicable local laws, and what we say below in relation to Streetchange Fundraising, once your donation is made, it will only be refunded to you with the prior written consent of the representative charity to whom it has been made, regardless of whether or not the donation had been paid to the charity by Streetchange. You should therefore get in touch with the charity first. Before a donation is refunded, the relevant Cause must agree that Streetchange may, subject to local applicable laws, deduct the amount to be refunded from subsequent payments to be made by Streetchange to the charity. Where no further payments are due to be made to such charity within one (1) week of the refund being made to you, Streetchange reserves the right to invoice the charity for the amount of the refund and the charity must agree to settle that invoice within one (1) month of the date of the invoice.</p>
	          <p>In relation to Streetchange Fundraising, Streetchange will charge your donation to your payment card account (or other payment method available on the Website) at the time of donating.</p>
	          <p>Use of your donation</p>
	          <p>Streetchange fees</p>
	          <p>Streetchange charges a small transaction fee on every donation made on the Website or its associated services. The fee is currently up to 10% of the gross donation. Donations are also subject to third party payment processing fees.</p>
	          <p>Unauthorised donations</p>
	          <p>When you make a donation the transaction is final and not disputable unless unauthorised use of your payment card or other payment method is proved. If you become aware of fraudulent use of your card, or if it is lost or stolen, you must notify your card provider in accordance with its reporting rules. Similarly, if you experience any issues of this nature when using another payment method, such as PayPal, you should contact the provider of that payment method for assistance.</p>
	          <p>Streetchange will never email or phone you and ask you to provide all of your payment details.</p>
	          <p>Protecting your password</p>
	          <p>When you register with Streetchange and choose a password to protect your secure account, you are responsible for maintaining the confidentiality of your password. If you become aware of any unauthorised use of your password, we recommend that you change your password immediately contact us on the <a href="https://Streetchange.org.uk/contact-us/"><u>Contact Us page.</u></a></p>
	          <p>Information</p>
	          <p>Streetchange is not an accounting, taxation or financial advisor, and you should not rely on information given on the Website or its associated services to determine the accounting, tax or financial consequences of making a donation to a charity. We strongly recommend that you consult your own adviser(s) about any accounting, taxation or financial consequences that may affect you.</p>
	          <p>Privacy</p>
	          <p>Streetchange’s Privacy Policy forms part of these Terms of Service. By agreeing to these Terms of Service you also give your consent to the way we may handle your personal information under that Policy.</p>
	          <p>User conduct</p>
	          <p>You must at all times use the Website and its associated services in a responsible and legal manner and ensure that the content you provide does not breach any intellectual property rights of a third party or breach any right or duty owed to a third party. In particular, but not exclusively:</p>
	          <ul>
	            <li>You must not upload offensive, obscene, racist, defamatory, misleading or deceptive content, including photographs, on to the Website or its associated services.</li>
	            <li>You may not remove or change anything on the Website.</li>
	          </ul>
	          <p>In addition, you as a user must not:</p>
	          <ul>
	            <li>misrepresent your identity or affiliation with any other person or organisation;</li>
	            <li>use the Website to conduct, display or forward surveys, pyramid schemes or chain letters;</li>
	            <li>interfere with, or disrupt, the service or services or networks connected to the service and introduce any computer virus (including any variant or similar malicious code or instructions) to the Streetchange systems; or</li>
	            <li>disclose any information relating to any donor except with the consent of the donor or as permitted by applicable local laws.</li>
	          </ul>
	          <p>Streetchange reserves the right to cancel your membership and delete any Streetchange page without notice in the event of a breach of the above rules. Streetchange may also suspend or delete a Streetchange page if the relevant charity is no longer receiving donations via Streetchange.</p>
	          <p>Links</p>
	          <p>The Website and its associated services contains links to other websites, including the websites of charities. Inclusion of a link to another website does not imply endorsement of its content or opinions. Your relationship and any transactions with other people or organisations through their websites or otherwise are your own responsibility.</p>
	          <p>Partner Services</p>
	          <p>Streetchange may from time to time select partners offering relevant information and services that we believe will enhance our provision for visitors to the Website. Whilst we will do our best to select partners of the highest integrity, we are not responsible for any aspect of the information or services offered by them, and if you choose to use their services you do so at your own risk.</p>
	          <p>Trademarks</p>
	          <p>The names Streetchange, Streetchange Fundraising and Streetchange.org.uk, the Streetchange logo and any other product and service names that we may present on the Website or its associated services from time to time may not be used in connection with any product or service that is not Streetchange’s, nor in any manner that is likely to cause confusion, or in any way that may disparage or discredit Streetchange. Other trademarks, service marks or logos that appear on the Website or its associated services, in particular (but not exclusively) those of member charities, Streetchange member pages or other organisations, are the property of their respective owners and are likely to be registered trademarks and subject to restrictions as to their use. They must not be used without the express permission of both Streetchange and the trade mark owner.</p>
	          <p>Copyright</p>
	          <p>All content on the Website and its associated services is owned by Streetchange, our member charities, Streetchange Fundraising page creators or other original providers, and is protected by the applicable intellectual property and proprietary rights and laws. You may copy content for your own personal, non-commercial use provided you do not alter it or remove any copyright, trade mark or other proprietary notice, and that your usage complies with any requests you may receive from any person with rights in that content. No other use of the Website’s and its associated services’ content is permitted without the express prior permission of Streetchange, and, where applicable, the copyright holder.</p>
	          <p>By visiting or using the Website or any of its associated services, you agree not to (and not to use any tool, program, script, browser extension or other technique, including bots, robots, spiders and scrapers and any similar tools or methods, in order to): (i) copy (except as authorised by these Terms of Service), mirror, frame, index, scrape, mine or otherwise gather or extract any of the content or data from the Website or its associated services; or (ii) sell or distribute any data which is gathered or extracted in breach of these terms, or which is based on or derived from any such data. Streetchange may take any measures it sees fit to block access to the Website and its associated services where it believes that these terms have been or will be breached. You agree that you will not take any steps to try to circumvent these measures and that you will not take any steps to mask your IP address. You acknowledge and agree that where there is any actual or threatened breach of these terms, damages may be an inadequate remedy and Streetchange shall be entitled, without prejudice to any other rights and remedies it may have, to seek an injunction or any other equitable relief for such breach. Streetchange may also request that you destroy any data you have gathered or extracted in breach of these terms and you agree that you will comply with such request promptly and certify the same.</p>
	          <p>Inquiries and permission requests may be sent to&nbsp;<u>info@Streetchange.org.uk</u></p>
	          <p>Changes to the service</p>
	          <p>Streetchange will make every effort to ensure that the Website and other services are available continuously, but reserves the right to modify, suspend or discontinue all or any part at any time with or without notice. Unless specifically exempted, any new features, services or software applications introduced shall be subject to these Terms of Service. Streetchange reserves its right to remove inactive fundraising pages from the Website and other services.</p>
	          <p>Failure to comply with these Terms of Service</p>
	          <p>In the event that you commit a breach of these Terms of Service Streetchange reserves the right at its sole discretion to immediately and without notice suspend or permanently deny your access to all or part of the Website and associated services.</p>
	          <p>Termination</p>
	          <p>You may discontinue use of the Website and associated services at any time. These Terms of Service will continue to apply to past use by you.</p>
	          <p>Disclaimer and Limitation of Liability</p>
	          <p>Streetchange does not, and nothing in these Terms of Service shall act to, exclude or limit Streetchange’s liability for death or personal injury resulting from its negligence, fraud or any other liability which may not by applicable law be excluded or limited. You agree that your use of the Website and its associated services is on an “as is” and “as available” basis and that your use of the Website and its associated services is at your sole risk. Streetchange does not guarantee continuous uninterrupted or secure access to our services and operation of the Website and associated services may be interfered with by numerous factors outside of our control. On that basis, except as expressly set out in these Terms of Service and except for the rights, guarantees and remedies which cannot be excluded, Streetchange does not provide other conditions, guarantees, warranties or terms in relation to the Website or its associated services, to the extent permissible by law. Streetchange shall undertake general maintenance and upkeep of the Website. During these periods, the Website and its associated services may not be available for use. In exceptional circumstances, the Website and associated services may also become unavailable at other times.</p>
	          <p>Streetchange shall only be liable under these Terms of Service for losses which are reasonably foreseeable and caused by Streetchange’s breach of these Terms of Service or Streetchange’s negligence. Streetchange’s total liability to you arising under or in connection with these Terms of Service, whether in contract, tort (including negligence), breach of statutory duty or otherwise, shall in no circumstances exceed the total sum of the donations you have made using the Website in the preceding 12 month period, ending on the date the circumstances giving rise to Streetchange’s liability arose.</p>
	          <p>Any liability Streetchange may have to you shall not include losses relating to any business of yours or your own losses such as lost or corrupt data, loss of profits, loss of contracts, loss of business opportunity, loss of sales, loss of revenue, loss of goodwill, loss of any software or data, loss of bargain, loss of opportunity, loss of use of computer equipment, loss of or waste of management or other staff time.</p>
	          <p>Streetchange may change the format and content of the Website and its associated services from time to time. You should refresh your browser each time you visit the Website to ensure that you are looking at the most up to date version of the Website, including the latest version of these Terms of Service.</p>
	          <p>Nothing in these Terms of Service excludes any statutory rights which may apply to your use of the Website and associated services which cannot be excluded, restricted or modified by contract.</p>
	          <p>Governing law</p>
	          <p>These Terms of Service and any contractual or non-contractual dispute arising out of or in connection with your use of the Website or the associated services are governed by the law, and subject to the jurisdiction of the courts of, the country set out in the country specific terms.</p>
	          <p>Third party rights</p>
	          <p>A person who is not a party to these Terms of Service has no right to enforce any term of these Terms of Service.</p>
	          <p>&nbsp;</p>
	          <p>&nbsp;</p>
	        </div>
				</div>
			</div>
		)
	}
}

export default TermsAndPrivacyPage
