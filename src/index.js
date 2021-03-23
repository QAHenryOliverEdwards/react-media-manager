import React from 'react';
import ReactDOM from 'react-dom';
import {Frame, TopBar, AudioPage} from "./audio-page";

ReactDOM.render(<Frame/>, document.querySelector('#root'));
ReactDOM.render(<TopBar/>, document.querySelector('#top-bar'));
ReactDOM.render(<AudioPage/>, document.querySelector('#audio-page'));