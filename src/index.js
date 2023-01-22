import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// Square component renders a single <button>
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  // In JavaScript classes, you need to always call super when defining the constructor of a subclass.
  // All React component classes that have a constructor should start with a super(props) call.

  render() {
    return (
      <button
        className='square'
        onClick={() => this.setState({value: 'X'})}
        /* By calling this.setState from an onClick handler in the Square’s render method,
        we tell React to re-render that Square whenever its <button> is clicked. */
        // seperated to different lines for readability
        /* When you call setState in a component,
        React automatically updates the child components inside of it too. */
      >
        {this.state.value}
      </button>
    );
  }
}

// Board component renders 9 squares
class Board extends React.Component {
  renderSquare(i) {
    //passes a prop (property) called value to the Square
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// Game component renders a baord with placeholder values
class Game extends React.Component {
  render () {
    return (
      <div className='game'>
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
