import React, { Component } from 'react';
import {Filter} from './Filter';
import {Navigator} from './Navigator';

import {DataSource} from './DataSource';

class App extends Component {
  render() {
    return (
      <div className="content">
      <div className="leftPane">
        <Filter/>
        <Navigator/>
       </div>
       <div className="rigthPane">
       <DataSource />
       </div>
      </div>
    );
  }
}

export default App;
