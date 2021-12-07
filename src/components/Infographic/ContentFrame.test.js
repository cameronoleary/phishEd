import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ContentFrame from './ContentFrame';

describe('ContentFrame', () => {
    let element;

    beforeEach(() => {
        element = render(
            <Router>
                <ContentFrame />
            </Router>
        );
    });

    it('renders component', () => {
        expect(element).toBeTruthy();
    });
});
