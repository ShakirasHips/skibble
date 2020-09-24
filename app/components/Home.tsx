import React from 'react';
import {Button} from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import styles from './Home.css';
import { VideoSelect } from './VideoSelect';


export default function Home(): JSX.Element {
  return (
	<body>
	<video></video>
    <div className={styles.container} data-tid="container">
      <Button variant="contained" color="primary" startIcon={<Icons.PlayArrowRounded />}>
        Start Recording
      </Button>
      <Button variant="contained" color="secondary" startIcon={<Icons.StopRounded />}>
        Stop Recording
      </Button>
      <VideoSelect />
    </div>
	</body>
  );
}
