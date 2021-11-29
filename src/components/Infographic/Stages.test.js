import React from 'react';
import ReactDOM from 'react-dom';
import Stages from './Stages';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stages />, div);
});
