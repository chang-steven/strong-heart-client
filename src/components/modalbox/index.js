import React from 'react';
import { Modal } from 'react-overlays';
import './modalbox.css';

class Modalbox extends React.Component {
    render() {
        return (
            <Modal
              show
              autoFocus={true}
              onBackdropClick={this.props.handleClose}
              backdropClassName="modal"
            >
              <div className="modal-content">
                <span
                  className="close"
                  onClick={this.props.handleClose}
                  >
                    &times;
                  </span>
                {this.props.children}
              </div>
            </Modal>
        );
    }
}

export default Modalbox;
