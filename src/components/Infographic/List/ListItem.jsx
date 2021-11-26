// External
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Internal
import Sources from '../Sources';
import { PRIMARY_COLOR } from '../../../constants';

const useStyles = makeStyles({
    container: {
        color: 'black',
        fontSize: '1.125rem',
        lineHeight: '1.875rem',
    },
    name: {
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
    },
});

const ListItem = ({ name, description, sources }) => {
    const classes = useStyles();

    return description ? (
        <div className={classes.container}>
            <span className={classes.name}>{name}</span>
            {` - ${description} `}
            {sources && <Sources sources={sources} />}
        </div>
    ) : (
        name
    );
};

export default ListItem;
