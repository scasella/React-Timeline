import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addHashtag } from '../actions/index';

class List extends Component {
constructor(props) {
  super(props);
    this.state = {first: "First",
        second: "Second"
       };
}
render() {
  console.log(this.props.hashtags)
   return (
      <div onClick={() => this.handleFirst()} className="list-group">
     {this.renderArray(this.props.hashtags)}
    </div>
    );
}
renderArray(array) {
  if(array != null) {
  return array.map((tag) => {
  return (
    <a key={tag} onClick={() => this.handleFirst()} className="list-group-item">{tag}</a>
    );
  });
  }
}
handleFirst() {
  console.log(this.props.hashtags)
}
handleSecond() {
  this.props.activeCategory(this.state.second);
}
};
function mapStateToProps(state) {
  return {
    hashtags: state.addHashtag
  };
}
/*function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addHashtag }, dispatch);
}*/

export default connect(mapStateToProps)(List);
