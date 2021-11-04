// External
import React from 'react';

// Internal
import copy from '../../../copy';
import ContentBlock from './ContentBlock';
import ContentBlockImage from './ContentBlockImage';
import StagesInAPhishingAttack from '../../../images/stages.png';

const Content = () => {
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
            {copyPrefix.facts.map((fact, i) => (
                <ContentBlock key={i} {...fact} />
            ))}
            <ContentBlock {...copyPrefix.howToPreventPhishingAttacks} />
        </div>
    );
};

export default Content;
