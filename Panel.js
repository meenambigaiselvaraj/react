import React, { Component } from 'react';
import './Panel.css';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            variable: undefined
        }; 
    }

    fun1() {

        this.setState( { variable: 1 } )
    }

    fun2() {  
         this.setState( { variable: 2 } )
    }

    render() {
        return (
                <div>
                    <br /><button onClick={() => this.fun1()}>Sign Up</button><br /><br />
                    <button onClick={() => this.fun2()}>Sign In</button>
                    <div>{this.state.variable===1 ? <Comp1 /> : <Comp2 />}</div>
                </div>  
        )
    }
}

export default Panel;