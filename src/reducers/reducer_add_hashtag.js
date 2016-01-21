export default function(state = [], action) {
  switch(action.type) {
    case 'ADD_HASHTAG':
      var newItem = true
    for (var i in state) {
      if(state[i] == action.payload) {
        newItem = false
      }
    }
    if(newItem == true) {
      return [action.payload, ...state];
    } else {
      return state;
    }
  }
  return state;
}
