// External
import React from 'react';
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
            <ContentBlock {...copyPrefix.whatIsPhishing} />
            <ContentBlockImage {...stagesInAPhishingAttack} />
            <ContentBlock {...copyPrefix.commonTypesOfPhishing} />
            <div className={classes.factsContainer}>
                {copyPrefix.facts.map((fact, i) => (
                    <div className={classes.fact}>
                        <ContentBlock key={i} {...fact} />
                    </div>
                ))}
            </div>
            <ContentBlock {...copyPrefix.howToPreventPhishingAttacks} />
        </div>
    );
};

export default Content;
