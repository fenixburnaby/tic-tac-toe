import React, {Component} from 'react';

class GameBoard extends Component {
    constructor() {
        super();
        this.state={
            playerTurn : 'X',
            winner:'',
            boxes:[]
        }
    }

    renderBoxes = () => {
        
        let allBoxes = [];

        if (this.props.boardSelection && this.props.boardSelection === '1' ) {
            for (let i = 0; i < 9; i++) {
               
                allBoxes.push(
                    <div 
                      className="box" 
                      id={i}
                      key={i} 
                      onClick={(event) => this.evaluateBoard(event)}
                    >{this.state.boxes[i]}</div>
                    );
            }

            return allBoxes;

        } else {
            return <p>An Error has occured! </p>
        }
    }

    evaluateBoard = (event) => {

        const id = event.target.id;
        let allArray = this.state.boxes;
        let player = this.state.playerTurn;
        
        allArray[id] = player;

        if (player === 'X'){
            player = 'O';
        } else {
            player = 'X';
        }

        this.setState({
          boxes:allArray,
          playerTurn: player
        });

        return false;
    }
     
    render(){
        
        return <div>
                <div className="game-board">
                    {this.renderBoxes()}
                </div>
        </div>;
    };
};


export default GameBoard;