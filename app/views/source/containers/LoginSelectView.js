import React, { Component } from 'react';
import { connect}  from 'react-redux';
import PlayerAuthenticate from '../container_forms/PlayerAuthenticateForm';
import { authenticate } from '../actions';
import { Link } from 'react-router';
import { MdArrowBack } from 'react-icons/lib/md';
import { ipcRenderer, remote } from 'electron';
class LoginSelectView extends Component {

  constructor (props) {
    super(props);
  }
  authenticatePlayer(values){
    alert(values.password);
    let { dispatch } = this.props;
    dispatch(authenticate(values));
  }
  authticateWithFacebook(){
    alert(`call to facebook`);
  }
  render() {
    return (
      <div className="AuthView view">
        <div className="viewNavigator">
          <div className="arrowBackContainer">
            <Link className="arrowBack" onClick={() => alert('hi')}><MdArrowBack/></Link>
            <span>Back</span>
          </div>
          <img src="./images/playmaster-logo-steel-gloss.png" width="600"/>
        </div>
        <div className={`LoginContainer`}>
          <PlayerAuthenticate
            onSubmit={(player) => this.authenticatePlayer(player)}
            onFacebookAuth={() => this.authticateWithFacebook()}
          />
        </div>
      </div>
    );
  }
}

export default connect()(LoginSelectView)
