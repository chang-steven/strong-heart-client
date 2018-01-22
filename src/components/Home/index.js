import React from 'react';
// import { connect } from 'react-redux';

import SectionContainer from '../section-container';
import './home.css';

export default function Home(props) {
  const whyContentArray = [
    { image: 'http://www.the10thing.com/images/wellbeing/active_elderly.jpg',
      name: 'elderly exercising',
      textBlurb: 'According to the National Strength and Conditioning Association, cardiovascular fitness is linked to reduced: 1. blood pressure 2. risk of developing coronary heart disease, 3. incidence of diabetes, 4. risk of stroke and heart attack, 5. resting heart rate, 6. fat mass'
    },
    {
      image: 'http://www.danintranet.org/storymedia/1914.jpg',
      name: 'swimming',
      textBlurb: 'To get the most from your cardiovascular workouts, the ACSM suggests that you exercise 3-5 times per week at 60-90% of your maximum heart rate. Sessions should last between 20-30 minutes, and you should choose exercises that use large muscle groups in a rhythmical fashion, such as cycling, running, swimming or rowing.'
    },
    {
      image: 'https://c1.staticflickr.com/6/5521/10993377086_b4b3a54406_b.jpg',
      name: 'people on exercise ball',
      textBlurb: 'Cardiovascular fitness leads to increased: 1. bone mass (for weight bearing body parts - usually the legs in cardio exercise; resistance training more notably increases bone density), 2. energy levels 3. resistance to illness and fatigue. These benefits are attributed to cardiovascular exercise as much as they are cardiovascular fitness. Benefits decline if exercise is not regular and consistent.'
    }
  ];

  const homeContentArray = [
    {
      title: 'how it works',
      content: 'http://via.placeholder.com/400x200',
    },
    {
      title: 'analysis',
      content: 'http://via.placeholder.com/400x200',
    },
  ];

  const homeContent = homeContentArray.map( (content, index) =>
      <SectionContainer {...content} key={index} />
    );

  const whyContent = whyContentArray.map( (content, index) =>
    <section className='whyContent' key={index}>
      <img src={content.image} alt={content.name} />
      <div className='why-scroll'>{content.textBlurb}</div>
    </section>
);



  return (
    <div className="home">
      <h2>Home</h2>
      {whyContent}
      <div>
        {homeContent}
      </div>
    </div>
  );
}

// const mapStateToProps = state => ({
//   homeContent: state.heartStrong.appStaticContent.homeContent
// })
//
// export default connect(mapStateToProps)(Home);
