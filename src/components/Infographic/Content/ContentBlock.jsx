// External
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: (isList) => ({
        padding: '1rem',
        maxWidth: '50rem',
        borderRadius: '.313rem',
        margin: '1.875rem 0 2.5rem',
        border: 'solid .063rem black',
    }),
    header: {
        fontWeight: 'bold',
        fontSize: '2.25rem',
    },
    text: {
        fontSize: '1.125rem',
        lineHeight: '1.875rem',
    },
    list: {
        textAlign: 'left',
        fontSize: '1.125rem',
        lineHeight: '1.875rem',
    },
});

const ContentBlock = (props) => {
    const { header, text, list } = props;

    const classes = useStyles();

    return (
        <div>
            {header && <span className={classes.header}>{header}</span>}
            <div className={classes.container}>
                {text && <span className={classes.text}>{text}</span>}
                {list?.items && (
                    <ul className={classes.list}>
                        {list.items.map((item, i) => (
                            <li>{item.name}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ContentBlock;
