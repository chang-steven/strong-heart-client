import React from 'react';
import './section-container.css';

function SectionContainer(props) {

  return (
    
    <section id={props.anchor}>
      <h2 className="section-title">{props.title}</h2>
      <div>
        <img src={props.content} alt={props.title}/>
      </div>
    </section>
  )
}

export default SectionContainer;
