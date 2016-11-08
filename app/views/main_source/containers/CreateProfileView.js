import React, { Component } from 'react';
import { connect}  from 'react-redux';
import CreateProfileForm from '../container_forms/CreateProfileForm';
import { CreatePlayer } from '../actions/PlayerActions';

class CreateProfileView extends Component {
  constructor (props) {
    super(props);
  }

  handleSubmit(values){
    let { dispatch } = this.props;
    console.log('handleSubmit -- values: ', values);
    dispatch(CreatePlayer(values))
    this.context.router.push('/');
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="DefaultView">
      <div style={{flex:1}}>
        <hgroup>
          <h1>Create a Player</h1>
        </hgroup>
        <CreateProfileForm onSubmit={(player) => this.handleSubmit(player)} />
        </div>
      </div>
    );
  }
}
CreateProfileView.contextTypes = {
  router: React.PropTypes.object
}

export default connect()(CreateProfileView)
