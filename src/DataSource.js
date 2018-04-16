import React, { Component } from 'react';


export class DataSource extends Component {
  render() {
    return (
      <div className="dataSource">
      <h5>Right Pane</h5>
      <hr/>
      <table className="table" cellspacing="0" cellpadding="0">			
	    <tr>				
            <th>Title</th>
            <th>Title</th>
            <th>Title</th>
            <th>Title</th>
	    </tr>
	    <tr>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
	    </tr>
	    <tr>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
	    </tr>
	    <tr>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
            <td>Data</td>
	    </tr>					
    </table>
      </div>
    );
  }
}