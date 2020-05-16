import React from 'react';
import './game.css';



class WitheTiles extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tileTargetValue: 'Click',
            clicked: false
        }
    }
    
    click = () => {
        this.setState({tileTargetValue: this.props.symbol})
        this.props.changeSymbol()
        this.setState({clicked: true})
    }
    

    render() {
        return(
            <div>
                <button onClick={this.state.clicked === false ? this.click : ''} className={this.state.clicked ? "tile blackTile" : "tile witheTile"}>{this.state.tileTargetValue}</button>
            </div>
        )
    }
}

export default WitheTiles;