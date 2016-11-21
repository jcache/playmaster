import React, { Component } from 'react';
import { connect}  from 'react-redux';

class GameSystemsView extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    let {game_systems } = this.props;
    return (
      <div className="GameSystemsView releaseAppmargin">
        <hgroup>
          <h3>Game Systems View</h3>
        </hgroup>
        <div className="Layout scroll3">
          <div className={`ListViewMain GameSystemsMain`}>
          {game_systems.map((g,i) => <div key={i} className={`ListViewBlock GameSystemBlock`}>{g.gameSystemName}</div>)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    game_systems: state.GameSystems.game_systems
  }
}
export default connect(mapStateToProps)(GameSystemsView)
