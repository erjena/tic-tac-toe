import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      player1: '',
      player2: '',
      row: [null, null, null]
    }
    this.renderRow = this.renderRow.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {

  }

  renderRow() {
    this.state.row.map(cell => {
      <td style={{ border: "1px solid grey", width: "45px", height: "45px" }}>{cell}</td>
    })
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              {this.renderRow()}
            </tr>
          </tbody>
        </table>
        <button onClick={this.handleClick}>X</button>
        <button onClick={this.handleClick}>O</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));