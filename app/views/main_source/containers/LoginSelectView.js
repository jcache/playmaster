import React, { Component } from 'react';
import { ipcRenderer, remote } from 'electron';
import { connect}  from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import CreateProfileForm from '../container_forms/CreateProfileForm';
import {CollectPlayer} from '../actions/PlayerActions';
import { Link } from 'react-router';



class LoginSelectView extends Component {
  constructor (props) {
    super(props);
  }
  handleSelectPlayer = (values) => {
    // console.log(values);
    this.context.router.push("/step_two");
    this.props.dispatch(CollectPlayer(values))
  }
  handleSubmit = (values) => {
    // console.log(values);
    this.context.router.push("/step_two");
    this.props.dispatch(CollectPlayer(values))
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="LoginSelectView releaseAppmargin">
        <div style={{flex:1, display: 'flex', maxWidth: '500px'}}>
          <div style={{flex:1}}>
            <hgroup>
              <h2>Player Selection</h2>
              <h4>Select a player to return as </h4>
            </hgroup>
            <div className={`PersonSelectList`}>
              <ul>
                <li> <Link to="" className={`active`} style={{backgroundImage: `url('./images/rogue.jpg')`}} href={void(0)}></Link></li>
                <li> <Link to="" href={void(0)}></Link></li>
                <li> <Link to="" href={void(0)}></Link></li>
                <li> <Link to="" href={void(0)}></Link></li>
                <li> <Link to="" href={void(0)}></Link></li>
                <li> <Link to="" href={void(0)}></Link></li>
                <li> <Link to="" href={void(0)}></Link></li>
                <li> <Link to="" href={void(0)}></Link></li>
                <li> <Link to="" href={void(0)}></Link></li>
                <li> <Link to="" href={void(0)}></Link></li>
                <li> <Link to="" href={void(0)}></Link></li>
                <li> <Link to="" href={void(0)}></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{flex:1, maxWidth: '500px'}}>
          <hgroup>
            <h2>Create a Player</h2>
            <h4>Select a player to return as </h4>
          </hgroup>
          <div className={`PersonCreateContainer`}>
            <Link to className={`btn btn-xl btn-primary`} href={void(0)}>Begin</Link>
          </div>

        </div>
      </div>
    );
  }
}
LoginSelectView.contextTypes = {
  router: React.PropTypes.object
}
const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(LoginSelectView)
