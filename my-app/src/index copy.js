// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'

// //Square 组件渲染了一个单独的 <button>。
// //Board 组件渲染了 9 个方块。
// //Game 组件渲染了含有默认值的一个棋盘，我们一会儿会修改这些值。到目前为止还没有可以交互的组件。
// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   )
// }

// class Board extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       squares: Array(9).fill(null),
//       xIsNext: true,
//     }
//   }
//   //棋子每移动一步，xIsNext（布尔值）都会反转，该值将确定下一步轮到哪个玩家，并且游戏的状态会被保存下来。
//   //我们将通过修改 Board 组件的 handleClick 函数来反转 xIsNext 的值
//   handleClick(i) {
//     const squares = this.state.squares.slice()
//     squares[i] = this.state.xIsNext ? 'X' : 'O'
//     this.setState({
//       squares: squares,
//       xIsNext: !this.state.xIsNext,
//     })
//   }

//   renderSquare(i) {
//     return (
//       <Square
//         value={this.state.squares[i]}
//         onClick={() => this.handleClick(i)}
//       />
//     )
//   }

//   render() {
//     const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
//     //这样就可以显示下一步是哪个玩家的了。

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     )
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     )
//   }
// }

// // ========================================

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Game />)

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ]
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i]
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a]
//     }
//   }
//   return null
// }
