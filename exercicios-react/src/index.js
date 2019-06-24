import React from 'react';
import ReactDOM from 'react-dom';
import T from './components/Teste';

const element = document.getElementById("root");
ReactDOM.render(
        <div>
            <T aa="55" />
        </div>
    , element);