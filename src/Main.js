import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import GameStart from './Components/GameStart';
import Paper from './Components/Paper';

class Main extends Component {
    constructor() {
        super()
        this.state = { }
    }  
    
    render(){

        return <div>
            <Route exact path="/" render={() => (
                <GameStart />
            )} />
            
            <Route path="/game" render={({history}) => (
                <Paper history={history} />
            )}  />

        </div>
        
    };
};


export default Main;