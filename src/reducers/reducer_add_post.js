export default function(state = [], action) {
  switch(action.type) {
    case 'ADD_POST':
    return [action.payload,...state];
  }
  return state;
}
