// External
import React from 'react';
import { Button as MaterialButton } from '@mui/material';

// Internal
import { PRIMARY_COLOR } from '../constants';

const Button = ({ startIcon, endIcon, label, onClick }) => (
    <MaterialButton
        sx={{
            fontWeight: 'bold',
            backgroundColor: PRIMARY_COLOR,
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
