import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addHashtag } from '../actions/index';
import { activeHashtag } from '../actions/index';

class List extends Component {
constructor(props) {
  super(props);
    this.state = {first: "First",
        second: "Second"
       };
}
render() {
   return (
      <div className="list-group">
     {this.renderArray(this.props.hashtags)}
    </div>
    );
}
renderArray(array) {
  if(array != null) {
  return array.map((tag) => {
  return (
    <a key={tag} onClick={() => this.handleClick(tag)} className="list-group-item">{tag}</a>
    );
  });
  }
}
handleClick(tag) {
  this.props.activeHashtag(tag)
}
};
function mapStateToProps(state) {
  return {
    hashtags: state.addHashtag
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ activeHashtag }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
