import React from 'react';
import './section-container.css';

function SectionContainer(props) {

  return (
    <section>
      <h2 className="section-title"><a name={props.anchor}>{props.title}</a></h2>
      <div>
        <img src={props.content} alt={props.title}/>
      </div>
    </section>
  )
}

export default SectionContainer;
