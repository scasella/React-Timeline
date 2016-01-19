import React, { Component }  from 'react';
import InputView from './input-view';
import List from './list';
import Timeline from './timeline'

export default class App extends Component {
  render() {
    return (
      <div>
      <div className="col-md-3"> <List /></div>
      <div className="col-md-1"> </div>
      <div className="col-md-4">
      <Timeline />
      </div>
      <InputView />
      </div>
    );
  }
};
