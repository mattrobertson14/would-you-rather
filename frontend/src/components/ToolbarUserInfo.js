import React, { Component } from 'react';
import '../stylesheets/ToolbarUserInfo.css';
import { Avatar } from './UI';
import propTypes from 'prop-types';

class ToolbarUserInfo extends Component {

  constructor(){
    super()
    this.state ={
      showMenu : false
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleClick() {
    if (!this.state.showMenu){
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState({ showMenu: !this.state.showMenu });
  }

  handleOutsideClick(ev) {
    if (this.node && this.node.contains(ev.target)){
      return;
    }

    this.handleClick();
  }

  render(){
    return (
      <div className="ToolbarUserInfo" onClick={ this.handleClick } >
        <div className="name">
          <h2>{ this.props.user.name }</h2>
        </div>
        <Avatar image={ this.props.user.avatarURL } size={ 44 } />
      </div>
    )
  }
}

ToolbarUserInfo.propTypes = {
  user : propTypes.object.isRequired
}

export default ToolbarUserInfo;
