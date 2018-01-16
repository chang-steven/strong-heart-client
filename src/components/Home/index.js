import React from 'react';
import { connect } from 'react-redux';

import SectionContainer from '../section-container'
import './home.css';

export function Home(props) {
  const homeContent = props.homeContent.map( (content, index) =>
    <SectionContainer {...content} key={index} />
);
  return (
    <div className="home">
      <h2>Home</h2>
      {homeContent}
    </div>
  );
}

const mapStateToProps = state => ({
  homeContent: state.appStaticContent.homeContent
})

export default connect(mapStateToProps)(Home);
