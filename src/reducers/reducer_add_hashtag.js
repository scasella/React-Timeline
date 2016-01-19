export default function(state = [], action) {
  switch(action.type) {
    case 'ADD_HASHTAG':
    return [action.payload, ...state];
  }
  return state;
}
