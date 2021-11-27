// External
import React from 'react';
import Fade from 'react-reveal/Fade';

// Internal
import copy from '../../copy';
import { PRIMARY_COLOR } from '../../constants';
import ContentBlock from './Content/ContentBlock';

// Assets
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import ClickIcon from '@mui/icons-material/TouchApp';
import MoneyIcon from '@mui/icons-material/AttachMoney';
import PasswordIcon from '@mui/icons-material/Password';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Stages = () => {
    const { header, sources, stages } =
        copy.landingPage.content.stagesInAPhishingAttack;

    const icons = [
        <EmailIcon fontSize='large' />,
        <LockOpenIcon fontSize='large' />,
        <ClickIcon fontSize='large' />,
        <LoginIcon fontSize='large' />,
        <PasswordIcon fontSize='large' />,
        <PersonIcon fontSize='large' />,
        <FingerprintIcon fontSize='large' />,
        <SendIcon fontSize='large' />,
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
