import React, { Component } from 'react';
import { connect}  from 'react-redux';
import PlayerCreateForm from '../container_forms/PlayerCreateForm';
import { CreatePlayer } from '../actions/PlayerActions';

class CreateProfileView extends Component {
  constructor (props) {
    super(props);
  }

  handleSubmit(values){
    let { dispatch } = this.props;
    dispatch(CreatePlayer(values));
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
          <PlayerCreateForm onSubmit={(player) => this.handleSubmit(player)} />
        </div>
      </div>
    );
  }
}
CreateProfileView.contextTypes = {
  router: React.PropTypes.object
}

export default connect()(CreateProfileView)
