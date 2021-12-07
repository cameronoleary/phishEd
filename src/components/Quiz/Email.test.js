import React from 'react';
import { render } from '@testing-library/react';
import Email from './Email';
import AbcIcon from '@mui/icons-material/Abc';

describe('Email', () => {
    let element;

    beforeEach(() => {
        const src = <img alt='icon' src={AbcIcon} />;
        element = render(<Email src={src} />);
    });

    it('renders component', () => {
        expect(element).toBeTruthy();
    });
});
