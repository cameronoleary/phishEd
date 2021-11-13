// External
import React from 'react';
import Fade from 'react-reveal/Fade';

// Internal
import copy from '../../copy';
import ListItem from './List/ListItem';
import ContentBlock from './Content/ContentBlock';

const CommonTypes = () => {
    const { header, text, list } =
        copy.landingPage.content.commonTypesOfPhishing;

    return (
        <ContentBlock header={header} text={text}>
            {list.items.map((item, idx) => (
                <Fade bottom>
                    <ContentBlock key={idx}>
                        <ListItem {...item} />
                    </ContentBlock>
                </Fade>
            ))}
        </ContentBlock>
    );
};

export default CommonTypes;
