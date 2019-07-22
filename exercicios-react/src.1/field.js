import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeValue } from './fieldActions';

class Field extends Component {
    render(){
        return (
            <div>
                <label>{this.props.value}</label> <br />
                <input onChange={this.props.changeValue} value={this.props.value} />
            </div>
            )
    }
}

const mapStates = state => ( {value : state.field.value} );
const mapDispatchs = dispatch => (bindActionCreators({ changeValue }, dispatch));
export default connect(mapStates, mapDispatchs)(Field);