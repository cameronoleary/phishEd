import React from 'react';
import ReactDOM from 'react-dom';
import Email from './Email';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Email />, div);
});
