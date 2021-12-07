import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Review from './Review';

describe('Review', () => {
    let element;

    beforeEach(() => {
        element = render(
            <Router>
                <Review />
            </Router>
        );
    });

    it('renders component', () => {
        expect(element).toBeTruthy();
    });
});
