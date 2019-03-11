import * as types from '../constants/postActionTypes';

export const init    = payload => ({ type: types.INIT_POST, payload });
export const addPost = payload => ({ type: types.ADD_POST, payload });

export const initAsync = () => {

  return (dispatch, getState) => {

    // let state = getState();

    fetch('http://jsonplaceholder.typicode.com/posts').then((res) => {
      return res.json();
    }).then((data) => {
      dispatch(init(data));
    }).catch((err) => {
      console.log(`\x1b[41m${err}\x1b[0m`);
    });
  };
};

export const addPostAsync = (post) => {

  return (dispatch, getState) => {

    // let state = getState();

    fetch('http://jsonplaceholder.typicode.com/posts', {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body   : JSON.stringify(post),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(addPost(data));
      })
      .catch((err) => {
        console.log(`\x1b[41m${err}\x1b[0m`);
      });
  };
};
