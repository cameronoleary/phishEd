// External
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Assets
import LaunchIcon from '@mui/icons-material/Launch';

const useStyles = makeStyles({
    comma: {
        margin: 0,
    },
    container: {
        color: 'black',
    },
    icon: {
        top: '.375rem',
        position: 'relative',
    },
    link: {
        color: '#f26721',
        fontWeight: 'bold',
        fontSize: '1.125rem',
    },
    list: {
        margin: 0,
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
            <ul className={classes.list}>
                {sources.map((source, idx) => (
                    <li key={idx}>
                        <a
                            target='_blank'
                            href={source.link}
                            className={classes.link}
                        >
                            {source.name}
                            <LaunchIcon className={classes.icon} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sources;
