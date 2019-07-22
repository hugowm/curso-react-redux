import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import Todo from './todo';
import { changeDescription } from './todoActions';

const TodoForm = props => {

    const keyHandler = e =>{
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        } else if(e.key === 'Escape'){
            props.handleClear();
        }
    }

    return(
        <div role="form" className="todoForm">
            <Grid cols="12 9 10">
                <input onKeyUp={keyHandler} onChange={props.changeDescription} id="description" value={props.description} className="form-control" placeholder="Adicione uma tarefa"></input>
            </Grid>
            <Grid cols="12 3 2">
                <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
                <IconButton style="info" icon="search" onClick={props.handleSearch} />
                <IconButton style="default" icon="close" onClick={props.handleClear} />
            </Grid>
        </div>
    )
};

const mapStates = state => ({description: state.todo.description});
const mapDispatchs = dispatch => (bindActionCreators({changeDescription}, dispatch));
export default connect(mapStates, mapDispatchs)(TodoForm);