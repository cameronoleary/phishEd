// External
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Internal
import Sources from '../Sources';

const useStyles = makeStyles({
    name: {
        fontWeight: 'bold',
    },
});

const ListItem = ({ name, description, sources }) => {
    const classes = useStyles();

    return description ? (
        <div>
            <span className={classes.name}>{name}</span>
            {` - ${description} `}
            {sources && <Sources sources={sources} />}
        </div>
    ) : (
        name
    );
};

export default ListItem;
