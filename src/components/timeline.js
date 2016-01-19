import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/index';

class Timeline extends Component {
renderArray() {
  var newArray = this.props.posts
    if(newArray != null && newArray.size != 0) {
    return newArray.map((post, i) => {
      return (
        <li key={i} className="list-group-item">{post}</li>
      );
    });
  } else {
    return <li className="list-group-item">No new posts</li>
  }
  }
render() {
    return (
      <div>
          <h4 onClick={this.handleClick}>{this.props.activeCategory} Category Posts</h4>
          <ul className="list-group">
          {this.renderArray()}
          </ul>
      </div>
    )
  }


handleClick() {
  console.log(this.props.activeCategory)
}
};

function mapStateToProps(state){
  return {
    posts: state.addPost
  }
}

export default connect(mapStateToProps)(Timeline)
