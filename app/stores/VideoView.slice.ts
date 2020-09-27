import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../store'

const VideoViewSlice = createSlice({
	name: 'VideoView',
	initialState: {source: null as Electron.DesktopCapturerSource | null},
	reducers: {
		set(state, action: PayloadAction<Electron.DesktopCapturerSource>){
			state.source = action.payload
		}
	}
})

export const {set} = VideoViewSlice.actions
export default VideoViewSlice.reducer
export const selectVideoView = (state: RootState) => state.videoView.source
