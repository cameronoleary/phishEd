// External
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        padding: '1rem',
        maxWidth: '50rem',
        borderRadius: '.313rem',
        margin: '1.875rem 0 2.5rem',
        border: 'solid .063rem black',
    },
    header: {
        fontWeight: 'bold',
        fontSize: '2.25rem',
    },
});

const ContentBlockImage = (props) => {
    const { header, image } = props;

    const classes = useStyles();

    return (
        <div>
            {header && <span className={classes.header}>{header}</span>}
            <div className={classes.container}>
                <img alt={image.alt} src={image.src} />
            </div>
        </div>
    );
};

export default ContentBlockImage;
