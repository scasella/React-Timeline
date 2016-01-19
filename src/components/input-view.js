import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addHashtag } from '../actions/index';
import { addPost } from '../actions/index';

import Timeline from './timeline';
import { bindActionCreators } from 'redux';

class InputView extends Component {
constructor(props) {
  super(props);
    this.state = {
      refValue: "",
      newValue: "",
     };
     this.recordHashtag = false;
     this.recordedHashtag = "";
     this.usedHashtags = [];
}
render() {
    return (
      <div>
      <div className="col-md-1"></div>
      <div className="col-md-3">
      <textArea className="form-control" rows="5" onKeyPress={(event) => this.handleKeyPress(event)} onChange={event => this.handleChange(event)} value={this.state.refValue}/>
      <div className="container">
      <br />
      {/*<div className="btn-group" id="dropdown">
      <button type="button" className="btn btn-primary" id="drop-b">{this.state.category}</button>
      <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
      <span className="caret"></span>
      </button>
      <ul className="dropdown-menu" role="menu">
        <li><a onClick={() => this.handleCatChange(1)}>First</a></li>
        <li><a onClick={() => this.handleCatChange(2)}>Second</a></li>
      </ul>
      </div>*/}
      <button type="button" id="submit" className="btn btn-success" onClick={() => this.handleSubmit()}>Submit</button>

      </div>
      <br /><br />
      </div>
      </div>

    );
}
handleKeyPress(e) {
  const that = this
  //Start or stop recording hashtags
    if(e.which == 35) {
      that.recordHashtag = true;
    } else if(e.which == 32){
      if(that.recordHashtag == true) {
        that.recordHashtag = false
        var newUsedHashtags = that.usedHashtags;
        newUsedHashtags.push(that.recordedHashtag);
        that.usedHashtags = newUsedHashtags;
        that.recordedHashtag = "";
      }
  }
  this.updateHashtag(e)
  //console.log(that.state.recordedHashtag)
    //console.log(that.usedHashtags)
}
updateHashtag(e) {
  const that = this
  //Update recordedHashtag as it is typed
  if(this.recordHashtag == true) {
    var rHash = that.recordedHashtag;
    //console.log(rHash)
    rHash = rHash + String.fromCharCode(e.which);
    that.recordedHashtag = rHash;
  }
}
handleChange(event) {
  this.setState({newValue: event.target.value});
  this.setState({refValue: event.target.value});
}
handleSubmit() {
  const that = this
  const array = this.usedHashtags
  for (var i in array) {
      that.props.addHashtag(array[i]);
  }

  that.props.addPost(that.state.newValue);

  this.setState({newValue: ""});
  this.setState({refValue: ""});
}
};

function mapActionsToProps(dispatch) {
  return bindActionCreators({addPost: addPost, addHashtag: addHashtag}, dispatch);
}

export default connect(null, mapActionsToProps)(InputView);
