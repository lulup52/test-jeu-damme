import React from 'react';
import CaseBlanche from './CaseBlanche'
import CaseNoire from './CaseNoire'

class PlateauDeJeu extends React.Component {

    render() {
        return(
            <div>
                <div><CaseBlanche /><CaseNoire /><CaseBlanche /></div>
                <div><CaseNoire /><CaseBlanche /><CaseNoire /></div>
                <div><CaseBlanche /><CaseNoire /><CaseBlanche /></div>
            </div>
        )
    }
}

export default PlateauDeJeu;