import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import SignUp from '../components/signup';
import { Modal, Button, ModalExample, Popover, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function(ComposedComponent) {
  const Example = React.createClass({
    getInitialState() {
      return { showModal: false };
    },

    componentDidMount(){
        this.open();
    },

    close() {
      this.setState({ showModal: false });
    },

    open() {
      this.setState({ showModal: true });
    },

    render() {
      const popover = (
        <Popover id="modal-popover" title="popover">
          very popover. such engagement
        </Popover>
      );
      const tooltip = (
        <Tooltip id="modal-tooltip">
          wow.
        </Tooltip>
      );

      return (
        <div>
        {this.props.children}
          <Modal
            enforceFocus={true}
            show={true}
            onHide={this.close}
            dialogClassName={"Login"}
            style={{backgroundColor:"transparent"}}>
            <Modal.Header closeButton>
              <Modal.Title>Sign Up / Sign In</Modal.Title>
            </Modal.Header>
              <h4>Register</h4>
              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

              <h4>Popover in a modal</h4>
              <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

              <h4>Tooltips in a modal</h4>
              <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

              <hr />

              <h4>Returning Player</h4>
              <p>Returning players click here</p>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    },
  });

  class Authentication extends Component {

    componentWillMount() {
      console.log('Auth HOC -- ComposedComponent: ', ComposedComponent);
      if (!this.props.authenticated) {
        console.log('access denied!!!');
        // this.context.router.push('/create_profile');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    close() {
      this.setState({ showModal: false });
    }

    open() {
      this.setState({ showModal: true });
    }


    render() {
      if (this.props.authenticated) {
        return <ComposedComponent {...this.props} />;
      }

      return <Example>
                <ComposedComponent {...this.props} />
             </Example>;
    }
  }

  Authentication.contextTypes = {
    router: React.PropTypes.object
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated }
  }

  return connect(mapStateToProps)(withRouter(Authentication));
}
