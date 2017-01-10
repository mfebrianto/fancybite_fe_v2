import '../../assets/stylesheets/loading.scss'

import React from 'react';
import { connect } from 'react-redux';

class Loading extends React.Component {

  render() {
    const { components } = this.props;

    return (
      <div className="white-overlay" style={components.display ? {} : { display: 'none' }}>
        <div className="loading-spinner"/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { components: state.loadingOverlay };
}

export default connect(mapStateToProps)(Loading);