import React from 'react';
import { render } from '@testing-library/react';
import Content from './Content';

describe('Content', () => {
    let element;

    beforeEach(() => {
        element = render(<Content />);
    });

    it('renders component', () => {
        expect(element).toBeTruthy();
    });
});
