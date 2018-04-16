import React, { Component } from 'react';


export class Filter extends Component {
  render() {
    return (
      <div className="filter">
      <h5>Filter</h5>
      <hr/>
        <select className="domainFilter">
            <option value="rm">RISK MERKEZI</option>
            <option value="kkb">KKB</option>
            <option value="findeks">FINDEKS</option>
        </select>
        <hr/>
        <select className="appFilter">
            <option value="eteminat">Eteminat</option>
            <option value="i-şube">İ-şube</option>
            <option value="">FINDEKS</option>
        </select>
      </div>
    );
  }
}