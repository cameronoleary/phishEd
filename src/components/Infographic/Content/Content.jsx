// External
import React from 'react';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/styles';

// Internal
import Stages from '../Stages';
import copy from '../../../copy';
import CommonTypes from '../CommonTypes';
import ContentBlock from './ContentBlock';

// Assets
import LockOpenIcon from '@mui/icons-material/LockOpen';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const useStyles = makeStyles({
    card: {
        minHeight: '15.5rem',
    },
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
    // Defines whether to fade a fact in from the top (0) or bottom (1).
    let flag = 0;

    const classes = useStyles();
    const copyPrefix = copy.landingPage.content;

    const icons = [
        <LockOpenIcon fontSize='large' />,
        <TrendingUpIcon fontSize='large' />,
        <AttachMoneyIcon fontSize='large' />,
    ];

    return (
        <div>
            <Fade bottom>
                <ContentBlock {...copyPrefix.whatIsPhishing} />
            </Fade>
            <Stages />
            <CommonTypes />
            <div className={classes.factsContainer}>
                {copyPrefix.facts.map((fact, idx) => {
                    if (flag === 0) {
                        flag = 1;

                        return (
                            <Fade key={idx} top>
                                <div className={classes.fact}>
                                    <ContentBlock
                                        icon={icons[idx]}
                                        className={{ card: classes.card }}
                                        {...fact}
                                    />
                                </div>
                            </Fade>
                        );
                    }

                    flag = 0;

                    return (
                        <Fade key={idx} bottom>
                            <div className={classes.fact}>
                                <ContentBlock
                                    icon={icons[idx]}
                                    className={{ card: classes.card }}
                                    {...fact}
                                />
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
