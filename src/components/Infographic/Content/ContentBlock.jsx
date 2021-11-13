// External
import React from 'react';
import Card from '@mui/material/Card';
import { makeStyles } from '@material-ui/styles';
import CardContent from '@mui/material/CardContent';

// Internal
import List from '../List/List';
import Sources from '../Sources';

const useStyles = makeStyles({
    container: {
        padding: '1rem',
        boxShadow: '5px 10px',
        borderRadius: '.313rem',
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

const ContentBlock = ({ children, icon, header, text, list, sources }) => {
    const classes = useStyles();

    return (
        <div>
            {header && <span className={classes.header}>{header}</span>}
            <Card
                sx={{
                    maxWidth: '50rem',
                    borderRadius: '.938rem',
                    backgroundColor: '#FFFFFF',
                }}
                className={classes.container}
            >
                <CardContent>
                    {icon && <div>{icon}</div>}
                    {text && <span className={classes.text}>{text}</span>}
                    {list && <List {...list} />}
                    {children}
                    {sources && (
                        <div className={classes.sources}>
                            <Sources sources={sources} />
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default ContentBlock;
