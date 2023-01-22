import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// Square component renders a single <button>
class Square extends React.Component {
  render() {
    return (
      <button className='square' onClick={() => console.log('click')}>
        {/* Notice how with onClick={() => console.log('click')},
        we’re passing a function as the onClick prop.
        React will only call this function after a click.
        Forgetting () => and writing onClick={console.log('click')} is a common mistake,
        and would fire every time the component re-renders. */}
        {this.props.value}
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
