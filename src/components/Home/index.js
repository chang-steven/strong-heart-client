import React from 'react';
// import { connect } from 'react-redux';

import SectionContainer from '../section-container';
import './home.css';

export default function Home(props) {
  const homeContentArray = [
    {
      title: 'about',
      content: 'http://via.placeholder.com/400x200',
    },
    {
      title: 'how it works',
      content: 'http://via.placeholder.com/400x200',
    },
    {
      title: 'analysis',
      content: 'http://via.placeholder.com/400x200',
    },
  ]

  const homeContent = homeContentArray.map( (content, index) =>
    <SectionContainer {...content} key={index} />
);
  return (
    <div className="home">
      <h2>Home</h2>
      {homeContent}
    </div>
  );
}

// const mapStateToProps = state => ({
//   homeContent: state.heartStrong.appStaticContent.homeContent
// })
//
// export default connect(mapStateToProps)(Home);
