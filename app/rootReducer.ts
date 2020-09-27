import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import videoViewReducer from './stores/VideoView.slice'

export default function createRootReducer(history: History) {
  return combineReducers({
	router: connectRouter(history),
	videoView: videoViewReducer,
  });
}
