import React, {Fragment} from 'react';
import './App.css';
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <PostForm />
        <Posts />
      </Fragment>
    </Provider>
  )
}

export default App;
