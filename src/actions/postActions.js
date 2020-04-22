import {FETCH_POST, NEW_POST} from "./types";

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => dispatch({type: FETCH_POST, payload: json}))
}

export const createPost = (postData) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(postData)
  }).then(resp => resp.json()).then(post => dispatch({type: NEW_POST, payload: post}))
}