import React, { Component } from 'react';

import Navbar from '~components/Navbar';

import { videoConstraints } from './constants';
import styles from './styles.module.scss';

class ScanScreen extends Component {
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

  render() {
    return (
      <>
        <Navbar />
        <div className={`row center middle ${styles.videoContainer}`}>
          <video ref={this.videoRef} controls autoPlay className={styles.videoWrapper} />
        </div>
      </>
    );
  }
}

export default ScanScreen;
