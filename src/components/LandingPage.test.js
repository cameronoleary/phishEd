import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './LandingPage';

describe('LandingPage', () => {
    let element;

    beforeEach(() => {
        element = render(
            <Router>
                <LandingPage />
            </Router>
        );
    });

    it('renders component', () => {
        expect(element).toBeTruthy();
    });
});
