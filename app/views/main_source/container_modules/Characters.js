import React, {Component} from 'react';
import { connect } from 'react-redux';


export default function(ComposedComponent) {
  const innerProps = new WeakMap();

  class Characters extends Component {
    constructor(props) {
      super(props);
    }

  }
  Characters.contextTypes = {
    router: React.PropTypes.object
  }

  function mapStateToProps(state) {
    return { Player: state.Player }
  }

  return connect(mapStateToProps)(Authentication);
}
