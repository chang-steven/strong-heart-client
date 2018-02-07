import React from 'react';
import Slider from 'react-slick';
import './gallery-carousel.css';
import Walking from './images/active-elderly.jpg';
import Swimming from './images/swimming.jpg';
import ExerciseBall from './images/exercise-ball.jpg';
import Biking from './images/family-biking.jpg';

export class GalleryCarousel extends React.Component {

  render() {
    const settings = {
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      centerMode: true,
      className: 'inner-carousel',
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            centerPadding: '60px',

          }
        },
        {
          breakpoint: 600,
          settings: {
            centerPadding: '80px',
          }
        },
        // {
        //   breakpoint: 480,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        //   }
        // }
      ]

    }

    return (
      <div className="carousel">
        <Slider {...settings}>


          <div className='inner-container'>
            <img src={Swimming} alt='swimming'/>
            <div className='text-blurb'>
              <p>Cardiovascular Fitness refers to the ability of your body to take in, transport and use oxygen while exercising and is directly linked to health.
              </p>
            </div>
          </div>

          <div className='inner-container'>
            <img src={Walking} alt='active elderly'/>
            <div className='text-blurb'>
              <p>Cardiovascular fitness is linked to REDUCED:
                <ul>
                  <li>Blood pressure</li>
                  <li>Risk of developing coronary heart disease</li>
                  <li>Risk of developing coronary heart disease</li>
                  <li>Incidence of diabetes</li>
                  <li>Risk of stroke and heart attack</li>
                  <li>Resting heart rate</li>
                  <li>Fat mass</li>
                </ul>
              </p>
            </div>
          </div>

          <div className='inner-container'>
            <img src={Biking} alt='family biking'/>
            <div className='text-blurb'>
                <p>Keys to get the most from your cardiovascular workouts.
                  <ul>
                    <li>Exercise 3-5 times per week</li>
                    <li>Aim for 60-90% of your maximum heart rate</li>
                    <li>Sessions should last between 20-30 minutes</li>
                  </ul>
              Choose exercises that use large muscle groups in a rhythmical fashion, such as cycling, running, swimming or rowing.</p>
            </div>
          </div>

          <div className='inner-container'>
            <img src={ExerciseBall} alt='exercise-ball'/>
            <div className='text-blurb'>
              <p>Cardiovascular fitness leads to INCREASED:
                <ul>
                  <li>Bone Mass</li>
                  <li>Energy Levels</li>
                  <li>Resistance to illness and fatigue</li>
                </ul>
                Benefits decline if exercise is not regular and consistent.</p>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}

export default GalleryCarousel;
