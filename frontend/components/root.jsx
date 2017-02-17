import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import VideoShowContainer from './video_show/video_show_container';
import VideoIndexContainer from './video_index/video_index_container';
import VideoSplash from './video_index/video_splash';

function isLoggedIn(){
  return !!store.getState().session.currentUser;
}

function redirectIfLoggedIn(nextState, replace) {
  if (isLoggedIn()){
    replace('/');
  }
}

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ VideoIndexContainer } />
        <Route path="/login" component={ SessionFormContainer } onEnter={ redirectIfLoggedIn } />
        <Route path="/signup" component={ SessionFormContainer } onEnter={ redirectIfLoggedIn } />
        <Route path="/videos/:id" component={ VideoShowContainer } />
      </Route>
    </Router>
  </Provider>
)

export default Root;
