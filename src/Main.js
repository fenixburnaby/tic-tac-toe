import React, {Component} from 'react';

class Main extends Component {
    constructor() {
        super()
        this.state = { }
    }   
    
    render(){
        
        return <div>
            <h1>Tic Tac Toe: The Game!</h1>
            <div className="paper">
                <div className="lines">
                    <div className="game-board">
                        <div className="box">X</div>
                        <div className="box">O</div>
                        <div className="box">O</div>
                        <div className="box">O</div>
                        <div className="box">X</div>
                        <div className="box">O</div>
                        <div className="box">O</div>
                        <div className="box">X</div>
                        <div className="box">X</div>
                    </div>
                </div>
                <div className="holes hole-top"></div>
                <div className="holes hole-middle"></div>
                <div className="holes hole-bottom"></div>
            </div>
        </div>;
    };
};


export default Main;