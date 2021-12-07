import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    let element;

    beforeEach(() => {
        element = render(<Header />);
    });

    it('renders component', () => {
        expect(element).toBeTruthy();
    });

    it('renders title', () => {
        expect(element.getByTestId('header-title')).toBeTruthy();
    });
});
