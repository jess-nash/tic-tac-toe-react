import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// Square component renders a single <button>
function Square(props) {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// replaced the Square class with the function above
// class Square extends React.Component {
//   // Deleted the constructor from Square because Square no longer keeps track of the game’s state

//   render() {
//     return (
//       <button
//         className='square'
//         onClick={() => this.props.onClick()}
//         // When a Square is clicked, the onClick function provided by the Board is called.
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

// Board component renders 9 squares
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true, // set the first move to be “X” by default.
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice(); // Note how in handleClick, we call .slice() to create a copy of the squares array to modify instead of modifying the existing array.
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    // passes a prop (property) called value to the Square
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        /* Now we’re passing down two props from Board to Square: value and onClick.
          The onClick prop is a function that Square can call when clicked. */
      />
    );
    /* We split the returned element into multiple lines for readability,
    and added parentheses so that JavaScript doesn’t insert a semicolon after return and break our code. */
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

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
