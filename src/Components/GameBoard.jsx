import React from 'react';
import WitheTiles from './WitheTiles'
import BlackTiles from './BlackTiles'
import './game.css';


const leter = ['a', 'b', 'c', 'd'];
const number = [ 1, 2, 3, 4];
const board = [];

for (let i = 0; i < leter.length; i++) {
    let row = [];
    for (let j = 0; j < number.length; j++){
        row.push({id:`${leter[i]}-${number[j]}`})
    }
    board.push(row)
}
console.log(board)


class GameBoard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            symbol: 'X',
        }
    }

    changeSymbol = () => {
        if (this.state.symbol === 'X') {
            this.setState({symbol: 'O'})
        } else if (this.state.symbol === 'O') {
            this.setState({symbol: 'X'})
        }
    }

    render() {
        return(
            <div className="board">
                <div >
                    {board.map((row)=> <div className="boardRow">{row.map((tile)=> <WitheTiles  symbol={this.state.symbol} changeSymbol={this.changeSymbol} id={tile.id}/> )}</div>)}
                </div>
              
            </div>
        )
    }
}

export default GameBoard;