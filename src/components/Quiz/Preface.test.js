import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Preface from './Preface';

describe('Preface', () => {
    let element;

    beforeEach(() => {
        element = render(
            <Router>
                <Preface />
            </Router>
        );
    });

    it('renders component', () => {
        expect(element).toBeTruthy();
    });

    it('renders buttons', () => {
        expect(element.getByTestId('preface-buttons')).toBeTruthy();
    });
});
