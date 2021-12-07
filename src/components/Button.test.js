import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import AbcIcon from '@mui/icons-material/Abc';

describe('Button', () => {
    let element;

    beforeEach(() => {
        element = render(
            <Button
                startIcon={<AbcIcon />}
                endIcon={<AbcIcon />}
                label='label'
            />
        );
    });

    it('renders component', () => {
        expect(element).toBeTruthy();
    });

    it('renders label', () => {
        expect(element.getByText('label')).toBeTruthy();
    });

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} label='Click Me' />);
        fireEvent.click(screen.getByText(/click me/i));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
