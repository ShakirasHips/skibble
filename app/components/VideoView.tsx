import React from 'react'
import styles from './VideoView.css'
import {useSelector} from 'react-redux'
import {selectVideoView} from '../stores/VideoView.slice'

let stream: MediaStream | null = null
export function VideoView(): JSX.Element{
	const currentSources = useSelector(selectVideoView)
	let videoElement = <video id="Video View" className={styles.VideoView}></video>
	if (currentSources === null || currentSources === undefined){
		return videoElement
	}

	const contraints = {
		audio: false,
		video: {
			mandatory: {
				chromeMediaSource: 'desktop',
				chromeMediaSourceId: currentSources.id
			}
		}

	}
	navigator.mediaDevices.getUserMedia(contraints).then((result)=>{
		let x = document.getElementById("Video View") as HTMLMediaElement
		if (x){
			x.srcObject = result
			x.play()
		}

	})

	if (stream === null){
		return videoElement
	}

return (<video id="Video View" className={styles.VideoView} >
		</video>)
}
