import React from 'react';
import './game.css';


class BlackTiles extends React.Component {

    render() {
        return(
            <div>
                <button onClick={() => console.log(`id Tiles ${this.props.iD}`)} className="tile blackTile"></button>
            </div>
        )
    }
}

export default BlackTiles;