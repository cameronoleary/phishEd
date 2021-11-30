// External
import React from 'react';
import { Button as MaterialButton } from '@mui/material';

// Internal
import { PRIMARY_COLOR } from '../constants';

// A wrapper for MUI's Button component.
const Button = ({ startIcon, endIcon, label, onClick }) => (
    <MaterialButton
        sx={{
            fontWeight: 'bold',
            marginRight: '1rem',
            backgroundColor: PRIMARY_COLOR,
            '&:last-child': {
                marginRight: 0,
            },
        }}
        variant='contained'
        startIcon={startIcon}
        endIcon={endIcon}
        onClick={onClick}
    >
        {label}
    </MaterialButton>
);

export default Button;
