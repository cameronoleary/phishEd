// External
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Internal
import copy from '../../copy';

// Assets
import LaunchIcon from '@mui/icons-material/Launch';

const useStyles = makeStyles({
    comma: {
        margin: 0,
    },
    container: {
        marginTop: '1rem',
        fontSize: '1.125rem',
    },
    icon: {
        top: '.375rem',
        position: 'relative',
    },
    link: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: '1.125rem',
        display: 'inline-block',
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

    if (!sources) return null;

    let sourcePrefix = '';

    if (sources.sourcePrefix) {
        sourcePrefix = sources.sourcePrefix;
    } else if (sources.sourceContent.length > 1) {
        sourcePrefix = `${copy.common.sources}: `;
    } else {
        sourcePrefix = `${copy.common.source}: `;
    }

    return (
        <div className={classes.container}>
            <span>{sourcePrefix}</span>
            <ul className={classes.list}>
                {sources.sourceContent.map((source, idx) => (
                    <li key={idx}>
                        <a
                            target='_blank'
                            href={source.link}
                            className={classes.link}
                        >
                            <div>
                                {source.name}
                                <LaunchIcon className={classes.icon} />
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sources;
