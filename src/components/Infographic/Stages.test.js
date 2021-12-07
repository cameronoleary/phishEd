import React from 'react';
import { render } from '@testing-library/react';
import Stages from './Stages';

describe('Stages', () => {
    let element;

    beforeEach(() => {
        element = render(<Stages />);
    });

    it('renders component', () => {
        expect(element).toBeTruthy();
    });
});
