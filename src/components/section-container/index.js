import React from 'react';
import './section-container.css';

function SectionContainer(props) {

  return (
    <section>
      <h2 className="section-title">{props.title}</h2>
      <div>
        <img src={props.content} />
      </div>
    </section>
  )
}

export default SectionContainer;
