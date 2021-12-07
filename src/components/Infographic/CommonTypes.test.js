import React from 'react';
import { render } from '@testing-library/react';
import CommonTypes from './CommonTypes';

describe('CommonTypes', () => {
    let element;

    beforeEach(() => {
        element = render(<CommonTypes />);
    });

    it('renders component', () => {
        expect(element).toBeTruthy();
    });
});
