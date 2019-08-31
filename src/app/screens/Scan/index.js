import React, { Component } from 'react';
import { func } from 'prop-types';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

import Navbar from '~components/Navbar';

import { videoConstraints } from './constants';
import styles from './styles.module.scss';

import Routes from 'constants/routes';

class Scan extends Component {
  videoRef = React.createRef();

  componentDidMount() {
    this.initializePlayer();
  }

  initializePlayer = () => {
    if (this.videoRef.current) {
      navigator.mediaDevices
        .getUserMedia(videoConstraints)
        .then(stream => (this.videoRef.current.srcObject = stream));
    }
  };

  handleSuccessfulScan = () => {
    this.props.goToFinishedPage();
  };

  render() {
    return (
      <>
        <Navbar />
        <div className={`row center middle ${styles.videoContainer}`}>
          <video
            ref={this.videoRef}
            controls
            autoPlay
            className={styles.videoWrapper}
            onClick={this.handleSuccessfulScan}
          />
        </div>
      </>
    );
  }
}

Scan.propTypes = {
  goToFinishedPage: func.isRequired
};

const mapDispatchToProps = dispatch => ({
  goToFinishedPage: () => dispatch(push(Routes.DONE))
});

export default connect(
  null,
  mapDispatchToProps
)(Scan);
