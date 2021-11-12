// External
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    comma: {
        margin: 0,
    },
    container: {
        color: 'white',
        display: 'inline-block',
    },
    link: {
        color: 'black',
    },
    list: {
        padding: 0,
        listStyle: 'none',
        display: 'inline-flex',
        whiteSpace: 'break-spaces',
        '& li': {
            display: 'inline',
        },
        '& li:after': {
            content: "', '",
        },
        '& li:last-child:after': {
            content: "''",
        },
    },
});

const Sources = ({ sources }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {'['}
            <ul className={classes.list}>
                {sources.map((source, idx) => (
                    <li key={idx}>
                        <a
                            target='_blank'
                            href={source.link}
                            className={classes.link}
                        >
                            {source.name}
                        </a>
                    </li>
                ))}
            </ul>
            {']'}
        </div>
    );
};

export default Sources;
