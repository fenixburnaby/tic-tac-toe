import React, {Component} from 'react';

class GameBoard extends Component {
    constructor() {
        super();
        this.state={
            playerTurn: 'X',
            playerName: '',
            winner:'',
            boxes:[]
        }
    }

    componentDidMount(){
        let {boxes:allArray} = this.state;
        const boardSize = parseInt(this.props.boardSelection);

        for (let i = 0; i < boardSize*boardSize; i++) {
            allArray[i] = '';
        }

        this.setState({
            boxes:allArray,
            playerName: this.props.playerX
          });

    }

    renderBoxes = () => {
        
        let allBoxes = [];

        if ( this.props.boardSelection ) {
            const boardSize = parseInt(this.props.boardSelection);
            for (let i = 0; i < boardSize*boardSize; i++) {
               
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
        const boardSize = parseInt(this.props.boardSelection);
        
        let {boxes:allArray,playerTurn:player,playerName,winner} = this.state;
        
        let slicedArray = [];
        let winByRows,winByColumns,winByDiagonal,playerWins = false;
        

        if(allArray[id] !== '' || winner !== ''){
            return;
        }
        
        allArray[id] = player;

        // Chop the array in chunks so we can then evaluate if this player wins.
        // Chunks are determined by the board size selection, by default is 3 (3x3)

        let i,j,temparray,chunk = boardSize;
        
        for (i=0,j=allArray.length; i<j; i+=chunk) {
            temparray = allArray.slice(i,i+chunk);
            slicedArray.push(temparray);
        }

        //check by rows
        for(let c = 0; c < slicedArray.length; c++){
            
            for(let b = 0; b < slicedArray[c].length; b++){    
                
                if(slicedArray[c] && slicedArray[c][b] && slicedArray[c][b] === player ){
                    playerWins = true;
                    winByRows = true;
                } else {
                    playerWins = false;
                    winByRows = false;
                    break;
                }

            }

            if(winByRows) break;
            
        }


        if (!playerWins) {
             //check by columns
            for(let c = 0; c<slicedArray.length; c++){

                for(let b = 0; b < slicedArray[c].length; b++){

                    if(slicedArray[b] && slicedArray[b][c] && slicedArray[b][c] === player ){
                        winByColumns = true;
                        playerWins = true;
                    } else {
                        winByColumns = false;
                        playerWins = false;
                        break;
                    }

                }

                if(winByColumns) break;
                
            }
        }

        //check by diagonals

        if (!playerWins) {
            //top to down
            for(let b = 0; b < slicedArray.length; b++){

                if(slicedArray[b][b] === player ){
                    winByDiagonal = true;
                    playerWins = true;
                } else {
                    winByDiagonal = false;
                    playerWins = false;
                    break;
                }

            }
        }

        if (!playerWins) {
            //down to top
            let counterForward = 0;
            for(let b = slicedArray.length-1; b >= 0; b--){

                if(slicedArray[counterForward][b] === player ){
                    winByDiagonal = true;
                    playerWins = true;
                } else {
                    
                    winByDiagonal = false;
                    playerWins = false;
                    break;
                }
                counterForward+=1;

            }
        }

        if(playerWins){
            this.setState({
                boxes:allArray,
                winner: playerName
              });

            alert(playerName+' Wins!')

            return true;
        }




        if (player === 'X'){
            player = 'O';
            playerName = this.props.playerO;
        } else {
            player = 'X';
            playerName = this.props.playerX;
        }

        this.setState({
          boxes:allArray,
          playerTurn: player,
          playerName:playerName
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