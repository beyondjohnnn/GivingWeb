import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../../../actions/fundraisingModalActionCreators'


import css from './StartFundraisingModal.scss'

class StartFundraisingModal extends React.Component {

  constructor(props){
    super(props)
    this.onTypeEmailBox = this.onTypeEmailBox.bind(this)
    this.onClickNotifyMe = this.onClickNotifyMe.bind(this)
    this.state = {
      email: ""
    }
    this.closeModalOnClick = this.closeModalOnClick.bind(this)
  }


  componentDidMount() {
    // window.addEventListener('click', this.closeModalOnClick)
  }

  closeModalOnClick(e) {
    // const componentBoundaries = this.refs.container.getBoundingClientRect()

    

    if (this.props.fundraisingModalVisible) {
      const mainAreaBoundaries = this.refs.fundraisingModal.getBoundingClientRect()
      const outsideMainArea = (e.clientX < mainAreaBoundaries.left || e.clientX > mainAreaBoundaries.right || e.clientY < mainAreaBoundaries.top || e.clientY > mainAreaBoundaries.bottom)
      if (outsideMainArea) {
        console.log("hiiiiii")
        this.props.toggleModal()
        
      }
    }
  }


  componentWillUnmount() {
    // window.removeEventListener('click', this.closeModalOnClick)
  }

  onTypeEmailBox(event){
    this.setState({
      email: event.target.value
    })
  }

  onClickNotifyMe(){
    console.log(this.state.email);
    this.setState({
      email: ""
    })
  }


  render(){
    return (
      <div className="start-fundraising-container" onClick={this.closeModalOnClick}>
        <section ref="fundraisingModal" className="modal-main-content">
          <i className="fa fa-times" aria-hidden="true" onClick={this.props.toggleModal}></i>
          <h2>Want to start fundraising?</h2>
          <i className="fa fa-child" aria-hidden="true"></i>
          <p>
            We'll be releasing our fundraising magic soon, allowing you to raise funds for your favourite causes.  Drop us your email below and we'll notify you as soon as we're live. 
          </p>
          <div className="email-signup">
            <input type="email"  placeholder="Enter your email address"
              onChange={this.onTypeEmailBox} value={this.state.email}/>
            <button onClick={this.onClickNotifyMe}>Notify me when this is ready</button>
          </div>
        </section>
      </div>
    )
  }
}

function mapStateToProps(state, routing) {
  return Object.assign({}, state.fundraisingModal, routing)
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StartFundraisingModal)
