import React, { Component } from 'react';

export default class TimelinePost extends Component {
constructor(props) {
  super(props);
  this.firstPart = "";
  this.hPart = "";
  this.secondPart = "";
}
render() {
  this.highlightHtags()
  const post = this.props.post;
  const dateItem = `${post[1]}`
  const string = `${post[0]}`
  return (
    <li key={post} className="list-group-item">{this.firstPart}&nbsp;<a className="bg-info">{this.hPart}</a>&nbsp;{this.secondPart}<br /><p className="small">{dateItem}</p></li>
  );
}
highlightHtags() {
  const that = this
  const postContent = `${this.props.post[0]}`
  const hLength = this.props.activeHtagLength
  const pLength = postContent.length
  const hStart = postContent.indexOf("#")
  const hEnd = this.hashtagEndAt(postContent, hStart)

  this.firstPart = postContent.substring(0, (hStart - 1))
  this.hPart = postContent.substring(hStart, hEnd)
  this.secondPart = postContent.substring((hEnd + 1), pLength)
}
hashtagEndAt(post, hTagStart) {
  var searchCharAt = (hTagStart + 1);
  var keepSearching = true;
  while (keepSearching == true) {
      if(post.charAt(searchCharAt) == " ") {
        keepSearching = false;
      } else {
        searchCharAt++;
      }
  }
  return searchCharAt
}
};
