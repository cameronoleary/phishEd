import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';

describe('Footer', () => {
    let element;

    beforeEach(() => {
        element = render(
            <Router>
                <Footer />
            </Router>
        );
    });

    it('renders component', () => {
        expect(element).toBeTruthy();
    });

    it('renders paragraph', () => {
        expect(element.getByTestId('footer-paragraph')).toBeTruthy();
    });
});
