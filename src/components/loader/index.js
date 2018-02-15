import React from 'react';
import { connect } from 'react-redux';
import { fetchUserInfo } from '../../actions';
import { loadAuthToken } from '../../helpers/local-storage';
import './bar-loader.css';

export class Loader extends React.Component {
  componentDidMount() {
    const token = loadAuthToken();
    if (token) {
      this.props.fetchUserInfo();
    }
}

  render() {
    return (
        <div>
          {
            this.props.loading ?
              <div className="loader">
              </div>

          :
          <div>
            {this.props.children}
          </div>
          }
        </div>
    )
  }
}

const mapStateToProps = state => ({
    loading: state.user.loading,
})

export default connect(mapStateToProps, { fetchUserInfo })(Loader);
