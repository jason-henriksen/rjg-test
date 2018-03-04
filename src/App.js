import React, { Component } from 'react';
import logo from './logo.svg';

//components
import Emoji from './Emoji';


import Grid from 'react-json-grid';
import DocUI from 'react-json-grid/lib/docTool/DocUI';
import autoBind from 'react-autobind';

import { toJS, observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

//styles
import './App.scss';
import './App.less';
import './App.styl';


@observer class App extends Component {

  constructor(props) {
    super(props); 
    autoBind(this);
  }

  doWork(){ 
    this.data[0]['a']++;
   }

  @observable data = [
    { "a": 1, "b": 20, "c": 3, "d": 4.5 },
    { "a": 21, "b": 30, "c": 33, "d": "asdf" },
    { "a": 31, "b": 40, "c": 333, "d": "zing" },
    { "a": 41, "b": 30, "c": 33, "d": "asdf" }    
  ];

  @action setValue(x, y, objKey, newValue) {
    // this is just for the test UI.  By making the "source of truth" the text file, i keep things in sync
    // cost is that I lose update performance for this test UI.  Try another test gui for perf testing.
    console.log(x, y, objKey, newValue);
    this.data[y][objKey] = newValue;
  }
  
  
  render() {
    return (
      <div>
        <h1>react-json-grid API Playground</h1>     
        <DocUI/>
        <hr/>
        <Grid 
          data={this.data} 
          onChange={this.setValue}
          gridHigh={300}
        />
        <br /><br /><br /><br /><br />
        <button onClick={this.doWork}>Click Me</button>
      </div>
    );
  }
}

export default App;
