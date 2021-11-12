// External
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Internal
import Sources from '../Sources';
import ListRenderer from '../List/List';

const useStyles = makeStyles({
    container: {
        padding: '1rem',
        boxShadow: '5px 10px',
        borderRadius: '.313rem',
        margin: '1.875rem 0 2.5rem',
        border: 'solid .063rem black',
    },
    header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '2.25rem',
    },
    text: {
        color: 'white',
        fontSize: '1.125rem',
        lineHeight: '1.875rem',
    },
    sources: {
        marginTop: '1rem',
    },
});

const ContentBlock = ({ header, text, list, sources }) => {
    const classes = useStyles();

    return (
        <div>
            {header && <span className={classes.header}>{header}</span>}
            <div className={classes.container}>
                {text && <span className={classes.text}>{text}</span>}
                {list && <ListRenderer {...list} />}
                {sources && (
                    <div className={classes.sources}>
                        <Sources sources={sources} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContentBlock;
