import React, { Component } from 'react';
import BasicGraph1 from './graphs/basic1';
import Cytoscape from 'cytoscape';
import Controls from './Controls';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.cy = Cytoscape({
      container: document.getElementById('cy'),
      elements: BasicGraph1,

      style: [ // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            'background-color': '#666',
            'label': 'data(id)'
          }
        },

        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#ccc',
            'label': 'data(id)',
   //         'color': 'white',
   //         'text-background-shape': 'roundrectangle',
   //         'text-background-color': 'black',
   //         'text-background-opacity': 1,
          }
        }
      ],

      layout: {
        name: 'breadthfirst',
        directed: false,
        padding: 30,
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Iterative Subgraph Counter</h2>
        </div>
        <div id="cy"></div>
        <Controls/>
      </div>
    );
  }
}

export default App;
