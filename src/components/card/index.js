import React from 'react';
import './card.css';

export default function Card(props) {
  return (
    <div className="card">
      {/* <h3>Title Here</h3>
      <p>Other info</p> */}
      {props.text}
    </div>
  );
}

Card.defaultProps = {
  text: ''
};
