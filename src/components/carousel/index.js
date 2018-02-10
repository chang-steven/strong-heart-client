import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

import Walking from './images/active-elderly.jpg';
import Swimming from './images/swimming.jpg';
import ExerciseBall from './images/exercise-ball.jpg';
import Biking from './images/family-biking.jpg';
import './carousel.css';
import './custom-carousel.css';


class ReactCarousel extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        emulateTouch={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        >
          <div className='carousel-holder'>
            <img src={Swimming} alt='swimming' />
            <div id="blurb" className='legend'>
              <div className="inner">
                <p>Cardiovascular Fitness is directly linked to health and refers to the ability of your body to take in, transport and use oxygen while exercising.
                </p>
              </div>
            </div>
          </div>

          <div className='carousel-holder'>
            <img src={Walking} alt='active elderly' />
            <div id="blurb" className='legend'>
              <div className="inner">
                <p><strong>Cardiovascular fitness</strong> REDUCES:</p>
                <ul>
                  <li>Blood pressure</li>
                  <li>Risk of developing coronary heart disease</li>
                  <li>Incidence of diabetes</li>
                  <li>Risk of stroke and heart attack</li>
                  <li>Resting heart rate</li>
                  <li>Fat mass</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='carousel-holder'>
            <img src={Biking} alt='family biking' />
            <div id="blurb" className='legend'>
              <div className="inner">
                <p>Keys to cardiovascular workouts.</p>
                  <ul>
                    <li>Exercise 3-5 times per week</li>
                    <li>Aim for 60-90% of your maximum heart rate</li>
                    <li>Sessions should last between 20-30 minutes</li>
                  </ul>
                  {/* <p>Choose exercises that use large muscle groups in a rhythmical fashion, such as cycling, running, swimming or rowing.</p> */}
              </div>

              </div>
            </div>

            <div className='carousel-holder'>
              <img src={ExerciseBall} alt='exercise-ball' />
              <div id="blurb" className='legend'>
                <div className="inner">
                  <p>Cardiovascular fitness INCREASES:</p>
                    <ul>
                      <li>Bone Mass</li>
                      <li>Energy Levels</li>
                      <li>Resistance to illness and fatigue</li>
                    </ul>
                    <p>Benefits decline if exercise is not regular and consistent.</p>
                </div>
                </div>
              </div>
            </Carousel>
          );
        }
      };

      export default ReactCarousel;
