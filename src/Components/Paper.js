import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import GameBoard from './GameBoard';
import Footer from './Footer';

class Paper extends Component {

    constructor() {
        super();    
        this.historyState = {};
        
    }
    
    componentWillMount(){
        
        if (!this.props.history.location.state) {
            this.props.history.push('/');
        } else {
            this.historyState = this.props.history.location.state;
        }
    }

    render(){
        return <div>
        <div className="paper">
            <div className="lines">
                <GameBoard 
                  playerX={this.historyState.playerX}
                  playerO={this.historyState.playerO} 
                  boardSelection={this.historyState.boardSelection} 
                />
            </div>
            <div className="holes hole-top"></div>
            <div className="holes hole-middle"></div>
            <div className="holes hole-bottom"></div>
        </div>
        <Footer />
    </div>;
    };
};


export default withRouter(Paper);