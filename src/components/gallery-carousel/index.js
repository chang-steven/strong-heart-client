import React from 'react';
import Slider from 'react-slick';
import './gallery-carousel.css';

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
          <div>
            <img src='./images/active-elderly.jpg' alt='active elderly'/>
          </div>

          <div className='inner-container'>
            <img src='https://3i133rqau023qjc1k3txdvr1-wpengine.netdna-ssl.com/wp-content/uploads/2015/08/shutterstock_251794285.jpg' alt='swimming'/>
            {/* <div className='text-blurb'>
              <p>Cardiovascular Fitness refers to the ability of your body to take in, transport and use oxygen while exercising and is directly linked to health.
              </p>
            </div> */}
          </div>

          <div className='inner-container'>
            <img src='http://www.talksyourhealth.com/wp-content/uploads/2017/04/iHealthySpineTips.2R.jpg' alt='active elderly'/>
            {/* <div className='text-blurb'>
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
            </div> */}
          </div>

          <div className='inner-container'>
            <img src='http://blog.ahealthieramerica.org/wp-content/uploads/2015/04/Family-Biking.jpg' alt='swimming'/>
            {/* <div className='text-blurb'>
                <p>Keys to get the most from your cardiovascular workouts.
                  <ul>
                    <li>Exercise 3-5 times per week</li>
                    <li>Aim for 60-90% of your maximum heart rate</li>
                    <li>Sessions should last between 20-30 minutes</li>
                  </ul>
              Choose exercises that use large muscle groups in a rhythmical fashion, such as cycling, running, swimming or rowing.</p>
            </div> */}
          </div>

          <div className='inner-container'>
            <img src='https://c1.staticflickr.com/6/5521/10993377086_b4b3a54406_b.jpg' alt='exercise-ball'/>
            {/* <div className='text-blurb'>
              <p>Cardiovascular fitness leads to INCREASED:
                <ul>
                  <li>Bone Mass</li>
                  <li>Energy Levels</li>
                  <li>Resistance to illness and fatigue</li>
                </ul>
                Benefits decline if exercise is not regular and consistent.</p>
            </div> */}
          </div>
        </Slider>
      </div>
    )
  }
}

export default GalleryCarousel;
