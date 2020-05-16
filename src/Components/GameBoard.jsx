import React from 'react';
import WitheTiles from './WitheTiles'
import BlackTiles from './BlackTiles'
import './game.css';

class GameBoard extends React.Component {

    render() {
        return(
            <div className="board">
                <div><WitheTiles /><BlackTiles /><WitheTiles /></div>
                <div><BlackTiles /><WitheTiles /><BlackTiles /></div>
                <div><WitheTiles /><BlackTiles /><WitheTiles /></div>
            </div>
        )
    }
}

export default GameBoard;