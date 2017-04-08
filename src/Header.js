import React, { Component } from 'react';
import './Header.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {showHideSettingMenu: 'hidden'};
  }

  render() {
    return (
		<div className="header">
		  <h5 className="title">Fire Department name</h5>
		  <i className="fa fa-cog setting-icon" aria-hidden="true" onClick={this.toggleSettingMenu.bind(this)}></i>
		  <div className={this.state.showHideSettingMenu + " setting-menu"}>
		  	<span>Sign out</span>
		  	<span>Change password</span>
		  	<span>Old query portal</span>
		  </div>
		</div>
    );
  }





  toggleSettingMenu() {
	var css = (this.state.showHideSettingMenu === "hidden") ? "show" : "hidden";
	this.setState({"showHideSettingMenu":css});
  };



}

export default Header;
