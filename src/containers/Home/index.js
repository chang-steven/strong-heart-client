import React from 'react';
import ReactCarousel from '../../components/carousel';
import exercise from './images/exercise.jpeg';
import doughnut from './images/doughnut.jpeg';
import line from './images/line.jpeg';
import './home.css';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showTopAnimation: false,
      showMiddleAnimation: false,
      showBottomAnimation: false
    };
  }

  componentDidMount() {
      window.addEventListener('scroll', this._handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this._handleScroll)
    }

    _handleScroll = () => {
        this.handleTopAnimationScroll();
        this.handleMiddleAnimationScroll();
        this.handleBottomAnimationScroll();
      }


  handleTopAnimationScroll() {
    if (window.scrollY > 235) {
      this.setState({
        showTopAnimation: true,
      })
    }

    else {
      this.setState({
        showTopAnimation: false,
      })
    }
  }

  handleMiddleAnimationScroll() {
    if (window.scrollY > 805) {
      this.setState({
        showMiddleAnimation: true,
      })
    }

    else {
      this.setState({
        showMiddleAnimation: false,
      })
    }
  }

  handleBottomAnimationScroll() {
    if (window.scrollY > 1000) {
      this.setState({
        showBottomAnimation: true,
      })
    }

    else {
      this.setState({
        showBottomAnimation: false,
      })
    }
  }

  render() {
    return (
      <div className="home" id="why">
        <ReactCarousel />
        <section id='how-it-works' className={this.state.showTopAnimation ? 'showTopAnimation' : 'noShowTopAnimation'}>
          <div className="home-blurb">
            <h2 className="section-title">Reap the Benefits</h2>
            <p className="home-paragraph">We all know that regular exercise is difficult, and without structure and determination it's tough to stay on schedule.  With <span>HEART<strong>STRONG</strong></span> log your exercise and analyze your activity patterns.</p>
          </div>
          <div className="image">
            <img src={exercise} alt='exercise'/>
          </div>
        </section>
        <section id='analysis' className={this.state.showMiddleAnimation ? 'showMiddleAnimation' : 'noShowMiddleAnimation'}>
          <div className="image">
            <img src={doughnut} alt='doughnut'/>
          </div>
          <div className="home-blurb">
            <h2 className="section-title">Analyze Your Exercise</h2>
            <p className="home-paragraph">Interactive charts help visualize trends in exercise and show you the types of activities you do the most. </p>
          </div>
        </section>
        <section className={this.state.showBottomAnimation ? 'showBottomAnimation' : 'noShowBottomAnimation'}>
          <div id="bottom-line-chart">
            <img src={line} alt='line'/>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
