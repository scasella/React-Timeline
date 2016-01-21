import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/index';
import { activeHashtag } from '../actions/index';

import TimelinePost from './timeline_post';

class Timeline extends Component {
renderArray() {
  var newArray = this.props.posts
    if(newArray != null && newArray.size != 0) {
      return newArray.map((post) => {
        var string = `${post[0]}`
        const isActiveHtag = (string.indexOf(this.props.activeHashtag) > -1)
          if(isActiveHtag == true) {
            return <TimelinePost key={post} post={post} />
          } else {
            return null
          }
        });
    } else {
      return <li className="list-group-item">No new posts</li>
  }
}
render() {
  return (
    <div>
      <h4>{this.props.activeHashtag} Posts</h4>
      {this.renderArray()}
    </div>
  )
}
};

function mapStateToProps(state){
  return {
    posts: state.addPost,
    activeHashtag: state.activeHashtag
  }
}

export default connect(mapStateToProps)(Timeline)
