import React from 'react';
import ReactDOM from 'react-dom';
import ContentBlock from './ContentBlock';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ContentBlock />, div);
});
