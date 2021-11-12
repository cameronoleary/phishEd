// External
import React from 'react';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/styles';

// Internal
import copy from '../../../copy';
import ContentBlock from './ContentBlock';
import ContentBlockImage from './ContentBlockImage';
import StagesInAPhishingAttack from '../../../images/stages.png';

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

    const stagesInAPhishingAttack = {
        ...copyPrefix.stagesInAPhishingAttack,
        image: {
            ...copyPrefix.stagesInAPhishingAttack.image,
            src: StagesInAPhishingAttack,
        },
    };

    return (
        <div>
            <Fade left>
                <ContentBlock {...copyPrefix.whatIsPhishing} />
            </Fade>
            <Fade right>
                <ContentBlockImage {...stagesInAPhishingAttack} />
            </Fade>
            <Fade left>
                <ContentBlock {...copyPrefix.commonTypesOfPhishing} />
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
            <Fade right>
                <ContentBlock {...copyPrefix.howToPreventPhishingAttacks} />
            </Fade>
        </div>
    );
};

export default Content;
