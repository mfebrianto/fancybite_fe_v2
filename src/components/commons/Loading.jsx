import '../../assets/stylesheets/loading.scss'

import React from 'react';
import { connect } from 'react-redux';

class Loading extends React.Component {

  render() {
    const { components } = this.props;

    return (
      <div className="white-overlay" style={true ? {} : { display: 'none' }}/>
    );
  }
}

function mapStateToProps(state) {
  return { components: state.components };
}

export default connect(mapStateToProps)(Loading);