// External
import React from 'react';
import clsx from 'clsx';
import Card from '@mui/material/Card';
import ReactHtmlParser from 'react-html-parser';
import { makeStyles } from '@material-ui/styles';
import CardContent from '@mui/material/CardContent';

// Internal
import List from '../List/List';
import Sources from '../Sources';

const useStyles = makeStyles({
    container: {
        padding: '1rem',
        margin: '1.875rem 0 2.5rem',
    },
    header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '2.25rem',
    },
    text: {
        color: 'black',
        fontSize: '1.125rem',
        lineHeight: '1.875rem',
    },
    sources: {
        marginTop: '1rem',
        lineHeight: '1.875rem',
    },
});

const ContentBlock = ({
    children = null,
    className = {},
    icon = null,
    header = null,
    text = null,
    list = null,
    sources = null,
}) => {
    const classes = useStyles();

    return (
        <div>
            {header && (
                <span
                    data-testid='content-block-header'
                    className={clsx(className.header, classes.header)}
                >
                    {header}
                </span>
            )}
            <Card
                data-testid='content-block-card'
                sx={{
                    maxWidth: '50rem',
                    borderRadius: '.938rem',
                    backgroundColor: '#FFFFFF',
                }}
                className={clsx(className.card, classes.container)}
            >
                <CardContent data-testid='content-block-card-content'>
                    {icon && <div data-testid='content-block-icon'>{icon}</div>}
                    {text && (
                        <span
                            data-testid='content-block-text'
                            className={classes.text}
                        >
                            {ReactHtmlParser(text)}
                        </span>
                    )}
                    {list && <List {...list} />}
                    {children}
                    {sources && (
                        <div
                            data-testid='content-block-sources'
                            className={classes.sources}
                        >
                            <Sources sources={sources} />
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default ContentBlock;
