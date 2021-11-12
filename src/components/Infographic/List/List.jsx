// External
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Internal
import ListItem from './ListItem';

const useStyles = makeStyles({
    item: {
        marginBottom: '1rem',
    },
    list: {
        color: 'white',
        textAlign: 'left',
        fontSize: '1.125rem',
        lineHeight: '1.875rem',
    },
});

const ListRenderer = ({ items }) => {
    const classes = useStyles();

    return (
        <ul className={classes.list}>
            {items.map((item, idx) => (
                <li key={idx} className={classes.item}>
                    <ListItem {...item} />
                </li>
            ))}
        </ul>
    );
};

export default ListRenderer;
