import React from 'react';
import { render } from '@testing-library/react';
import Sources from './Sources';

describe('Sources', () => {
    let element;

    let sources = {
        sourcePrefix: 'source-sourcePrefix',
        sourceContent: [
            {
                name: 'source-name-1',
                link: 'source-link-1',
            },
            {
                name: 'source-name-2',
                link: 'source-link-2',
            },
        ],
    };

    beforeEach(() => {
        element = render(<Sources sources={sources} />);
    });

    it('renders component', () => {
        expect(element).toBeTruthy();
    });

    it('renders source prefix', () => {
        expect(element.getByTestId('sources-source-prefix')).toBeTruthy();
    });

    it('renders sources', () => {
        expect(element.getByTestId('sources-source-list')).toBeTruthy();
    });
});
