import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import Footer from './Footer';

class GameStart extends Component {

    constructor() {
        super();
        this.doSubmit = this.doSubmit.bind(this);
        this.state={
            playerX : '',
            playerO:'',
            boardSelection:'3'
        }
    }
     
    doSubmit = (event) => {

        event.preventDefault();             
        
        this.props.history.push('game',{
              playerX: this.state.playerX,
              playerO: this.state.playerO,
              boardSelection: this.state.boardSelection

            });
                        
    }
    
    render(){
        
        return <div>
            <h1>Tic Tac Toe: The Game</h1>
            <div className="modern-form">
            <h3>Fill the information and get ready to play!</h3>
            <form onSubmit={(event) => this.doSubmit(event)}>
                <input type="text" name="name" className="question" id="nme" required autoComplete="off" onChangeCapture={(event) => this.setState({ playerX: event.target.value})} />
                <label htmlFor="nme"><span>Tag for Player 'X'</span></label>
        
            
                <input type="text" name="name" className="question" id="nme2" required autoComplete="off" onChangeCapture={(event) => this.setState({ playerO: event.target.value})} />
                <label htmlFor="nme2"><span>Tag for Player 'O'</span></label>

                
                <div className="select">
					<select id="boardSelection" className="select-text" required onChange={(event) => this.setState({ boardSelection: event.target.value})}>
						<option value="3" defaultValue>Default (3x3) </option>
                        <option value="" disabled >More Options Coming Soon!</option>
					</select>
					<span className="select-highlight"></span>
					<span className="select-bar"></span>
					<label className="select-label">Select Board</label>
				</div>
            
            <input type="submit" value="Let's Play" />
            </form>
            </div>
            <Footer />
    </div>;
    };
};


export default withRouter(GameStart);