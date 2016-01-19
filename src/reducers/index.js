import { combineReducers } from 'redux'
import AddHashtag from './reducer_add_hashtag';
import AddPost from './reducer_add_post';

const rootReducer = combineReducers({
  addHashtag: AddHashtag,
  addPost: AddPost
});

export default rootReducer;
