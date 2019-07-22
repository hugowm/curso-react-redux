const INITIAL_STATE = {
    description: 'Principal',
    list: [{
        _id: 1,
        description: 'tarefa 01',
        done: true
    },
    {
        _id: 2,
        description: 'tarefa 02',
        done: false
    },
    {
        _id: 3,
        description: 'tarefa 03',
        done: false
    }]
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED' : return {...state, description: action.payload};
        default : return state;
    }
}