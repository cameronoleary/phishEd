// External
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        width: '100%',
    },
});

const Email = ({ src }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <img alt='email' src={src} />
        </div>
    );
};

export default Email;
