import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';

function Modal (props) {

  // Render nothing if the "show" prop is false
  if(!props.show) {
    return null;
  }

  return (
    <div className="backdrop">
      <div className="modal">
        {props.children}

        <div className="footer">
          <button onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
