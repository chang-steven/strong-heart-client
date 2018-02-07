import React from 'react';
import { Modal } from 'react-overlays';
import Transition, { ENTERED, ENTERING } from 'react-transition-group/Transition';
import './modalbox.css';


const FADE_DURATION = 200;

const fadeStyles = {
  [ENTERING]: 'in',
  [ENTERED]: 'in',
};

const Fade = ({ children, ...props }) => {
  return (
    <Transition {...props} timeout={FADE_DURATION}>
      {(status, innerProps) => React.cloneElement(children, {
        ...innerProps,
        className: `fade ${fadeStyles[status]} ${children.props.className}`,
      })}
    </Transition>
  );
}


class Modalbox extends React.Component {
    render() {
        return (
          <div className='transition-example'>
            <Modal
              show
              autoFocus={true}
              transition={Fade}
              backdropTransition={Fade}
              onBackdropClick={this.props.handleClose}
              backdropClassName='transition-example-backdrop'
              className='transition-example-modal'
            >
              <div className="modal-content transition-example-dialog">
                <span
                  className="close"
                  onClick={this.props.handleClose}
                  >
                    &times;
                  </span>
                {this.props.children}
              </div>
            </Modal>
          </div>
        );
    }
}

export default Modalbox;
