import React from 'react';
import ReactDOM from 'react-dom';
import Sources from './Sources';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sources />, div);
});