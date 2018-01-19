import React from 'react';
import { connect } from 'react-redux';
import { fetchBadges } from '../../actions';

import Card from '../card';
import './badges.css';

export class Badges extends React.Component {

  componentDidMount() {
    this.props.fetchBadges();
  }

  render() {  
    const badges = this.props.badges.map( (badge, index ) =>(
      <div className="badge card">
        <h3>{badge.name}</h3>
        <img src={badge.link} alt={badge.name} />
        <p>{badge.date}</p>
      </div>
    ),
  );

    return (
      <div className="badge-collection">
        <h2>Badges</h2>
        <section className="recent-badge">
          <Card text={'Most recent badge goes here'}/>
        </section>
        <section className="badges">
          {badges}
        </section>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  badges: state.heartStrong.badges
})
export default connect(mapStateToProps, {fetchBadges})(Badges);
