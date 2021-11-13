// External
import React from 'react';
import Fade from 'react-reveal/Fade';

// Internal
import copy from '../../copy';
import ContentBlock from './Content/ContentBlock';

// Assets
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import ClickIcon from '@mui/icons-material/TouchApp';
import SubjectIcon from '@mui/icons-material/Subject';
import MoneyIcon from '@mui/icons-material/AttachMoney';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Stages = () => {
    const { header, sources, stages } =
        copy.landingPage.content.stagesInAPhishingAttack;

    const icons = [
        <EmailIcon fontSize='large' />,
        <ClickIcon fontSize='large' />,
        <InfoIcon fontSize='large' />,
        <SubjectIcon fontSize='large' />,
        <PersonIcon fontSize='large' />,
        <FingerprintIcon fontSize='large' />,
        <MoneyIcon fontSize='large' />,
    ];

    return (
        <ContentBlock header={header} sources={sources}>
            {stages.map((stage, idx) => (
                <div key={idx}>
                    <Fade bottom>
                        <ContentBlock icon={icons[idx]} {...stage} />
                    </Fade>
                    <Fade bottom>
                        {idx !== stages.length - 1 && (
                            <ArrowDownwardIcon fontSize='large' />
                        )}
                    </Fade>
                </div>
            ))}
        </ContentBlock>
    );
};

export default Stages;
