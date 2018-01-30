import React from 'react';
import { Modal } from 'react-overlays';

import './modalbox.css';
class Modalbox extends React.Component {



    render() {
    //   const modalStyle = {
    //   position: 'fixed',
    //   zIndex: 1040,
    //   top: 0, bottom: 0, left: 0, right: 0
    // };
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
