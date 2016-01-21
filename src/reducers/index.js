import { combineReducers } from 'redux'
import AddHashtag from './reducer_add_hashtag';
import AddPost from './reducer_add_post';
import ActiveHashtag from './reducer_active_hashtag'

const rootReducer = combineReducers({
  addHashtag: AddHashtag,
  addPost: AddPost,
  activeHashtag: ActiveHashtag
});

export default rootReducer;
