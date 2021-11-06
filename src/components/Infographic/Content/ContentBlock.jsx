// External
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: (isList) => ({
        padding: '1rem',
        boxShadow: '5px 10px',
        borderRadius: '.313rem',
        margin: '1.875rem 0 2.5rem',
        border: 'solid .063rem black',
    }),
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
    list: {
        color: 'white',
        textAlign: 'left',
        fontSize: '1.125rem',
        lineHeight: '1.875rem',
    },
    name: {
        fontWeight: 'bold',
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
                            <li>
                                <span className={classes.name}>
                                    {item.name}
                                </span>
                                {item.description && `: ${item.description}`}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ContentBlock;
