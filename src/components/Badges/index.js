import React from 'react';
import { connect } from 'react-redux';
import { fetchBadges } from '../../actions';

// import Card from '../card';
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
    const recentBadge = (
  <div className="badge card">
    <h3>Gold Medal</h3>
    <img src='http://via.placeholder.com/200x200' alt='Gold Medal' />
    <p>12/25/17</p>
  </div>);

    return (
      <div className="badge-collection">
        <h2>Badges</h2>
        <section className="recent-badge">
          {recentBadge}
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
