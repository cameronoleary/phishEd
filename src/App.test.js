import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
    let element;

    beforeEach(() => {
        element = render(<App />);
    });

    it('renders component', () => {
        expect(element).toBeTruthy();
    });
});
