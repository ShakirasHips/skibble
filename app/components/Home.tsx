import React from 'react';
import {Button} from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import styles from './Home.css';
import {Temp} from './VideoSelect';
import {VideoView} from './VideoView'

export class Home extends React.Component {

	render(){
		return (
		  <body>
		  <VideoView></VideoView>
		  <div className={styles.container} data-tid="container">
			<Button variant="contained" color="primary" startIcon={<Icons.PlayArrowRounded />}>
			  Start Recording
			</Button>
			<Button variant="contained" color="secondary" startIcon={<Icons.StopRounded />}>
			  Stop Recording
			</Button>
			<Button variant="contained" color="secondary" startIcon={<Icons.StopRounded />}>
			  Test Recording
			</Button>
			<Temp />
		  </div>
		  </body>
		);
	}
}
