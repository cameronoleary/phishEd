// External
import React from 'react';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/styles';

// Internal
import Stages from '../Stages';
import copy from '../../../copy';
import CommonTypes from '../CommonTypes';
import ContentBlock from './ContentBlock';

const useStyles = makeStyles({
    factsContainer: {
        display: 'flex',
    },
    fact: {
        marginRight: '1rem',
        '&:last-child': {
            marginRight: 0,
        },
    },
});

const Content = () => {
    let flag = 0;
    const classes = useStyles();

    const copyPrefix = copy.landingPage.content;

    return (
        <div>
            <Fade bottom>
                <ContentBlock {...copyPrefix.whatIsPhishing} />
            </Fade>
            <Fade bottom>
                <Stages />
            </Fade>
            <Fade bottom>
                <CommonTypes />
            </Fade>
            <div className={classes.factsContainer}>
                {copyPrefix.facts.map((fact, idx) => {
                    if (flag === 0) {
                        flag = 1;

                        return (
                            <Fade top>
                                <div key={idx} className={classes.fact}>
                                    <ContentBlock {...fact} />
                                </div>
                            </Fade>
                        );
                    }

                    flag = 0;

                    return (
                        <Fade bottom>
                            <div key={idx} className={classes.fact}>
                                <ContentBlock {...fact} />
                            </div>
                        </Fade>
                    );
                })}
            </div>
            <Fade bottom>
                <ContentBlock {...copyPrefix.howToPreventPhishingAttacks} />
            </Fade>
        </div>
    );
};

export default Content;
