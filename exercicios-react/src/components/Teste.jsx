import React, {Component} from 'react';

export default class Teste extends Component {
    render(){
        return (
            <h1>{this.props.aa || 'teste'}</h1>
        )
    }
}