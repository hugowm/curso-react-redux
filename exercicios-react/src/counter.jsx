import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { inc, dec, stepChanged } from './counterActions';

const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>    
        <input onChange={props.stepChanged} value={props.counter.step} type="number" />
        <button onClick={props.dec}>dec</button>
        <button onClick={props.inc}>inc</button>
    </div>
)


const mapStates = state => ({ counter: state.counter });
const mapDispaths = dispatch => bindActionCreators({ inc, dec, stepChanged }, dispatch);

export default connect(mapStates, mapDispaths)(Counter);