/*eslint-disable no-console */
/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import User from './ExampleApplication';
ReactDOM.render(
    <User />,
    document.getElementById('app')
);
