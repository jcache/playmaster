import React, {Component} from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {

  const privateProps = new WeakMap();

  class Player extends Component {
    constructor(props) {
      super(props);
    }

  }
  Player.contextTypes = {
    router: React.PropTypes.object
  }

  function mapStateToProps(state) {
    return {}
  }

  return connect(mapStateToProps)(Player);
}
