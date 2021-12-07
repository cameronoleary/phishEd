import React from 'react';
import { render } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
    let element;

    beforeEach(() => {
        element = render(<Logo />);
    });

    it('renders component', () => {
        expect(element).toBeTruthy();
    });
});
