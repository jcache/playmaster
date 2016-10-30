import React, { Component } from 'react';
import { connect}  from 'react-redux';
import CreateProfileForm from '../container_forms/CreateProfileForm';
import { CollectPlayer } from '../actions/PlayerActions';

class CreateProfileView extends Component {
  constructor (props) {
    super(props);
  }

  handleSubmit(values){
    this.props.dispatch(CollectPlayer(values))
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="DefaultView">
      <div style={{flex:1}}>
        <hgroup>
          <h1>Create a Player</h1>
        </hgroup>
        <CreateProfileForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}



export default connect()(CreateProfileView)
