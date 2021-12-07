import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Quiz from './Quiz';

describe('Quiz', () => {
    let element;

    beforeEach(() => {
        element = render(
            <Router>
                <Quiz />
            </Router>
        );
    });

    it('renders component', () => {
        expect(element).toBeTruthy();
    });

    it('renders content', () => {
        expect(element.getByTestId('quiz-content')).toBeTruthy();
    });

    it('renders footer', () => {
        expect(element.getByTestId('quiz-footer')).toBeTruthy();
    });
});
