import React, { Component } from 'react';


export class Navigator extends Component {
  render() {
    return (
      <div className="navigator">
      <h5>Navigator</h5>
      <hr/>
      <div className="btn-group">
        <button className="btn-element">Element</button>
        <button className="btn-element">Data Pool</button>
        <button className="btn-element">Data Management</button>
        <button className="btn-element">Query</button>
        <button className="btn-element">Data Source</button>
    </div>    
      </div>
    );
  }
}