export function addHashtag(obj) {
  return {
    type: 'ADD_HASHTAG',
    payload: obj
  };
}

export function addPost(obj) {
  return {
    type: 'ADD_POST',
    payload: obj
  };
}
