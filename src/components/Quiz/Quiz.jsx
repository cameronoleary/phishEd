// External
import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@material-ui/styles';

// Assets
import HomeIcon from '@mui/icons-material/Home';
import ReplayIcon from '@mui/icons-material/Replay';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import WarningIcon from '@mui/icons-material/ReportGmailerrorred';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

// Internal
import Email from './Email';
import copy from '../../copy';
import Button from '../Button';
import { ROUTES } from '../../constants';
import { getEmails } from '../../utils/quiz';
import ContentBlock from '../Infographic/Content/ContentBlock';

const useStyles = makeStyles({
    button: {
        width: '8rem',
        height: '2rem',
        cursor: 'pointer',
        marginRight: '1rem',
        borderRadius: '.313rem',
        '&:last-child': {
            marginRight: 0,
        },
    },
    buttonContainer: {
        display: 'flex',
        marginTop: '1rem',
        justifyContent: 'center',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '2.5rem',
        textAlign: 'center',
        alignContent: 'center',
        flexDirection: 'column',
    },
    footerContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    header: {
        color: 'black',
    },
    paragraph: {
        width: '100%',
    },
});

const CHOICES = {
    PHISHING: 'PHISHING',
    LEGITIMATE: 'LEGITIMATE',
};

const Quiz = () => {
    const { completed, buttons } = copy.quiz;

    const [next, setNext] = useState(0);
    const [score, setScore] = useState(0);
    const [emails, setEmails] = useState([]);
    const [showNext, setShowNext] = useState(false);
    const [finished, setFinished] = useState(false);
    const [nextButtonLabel, setNextButtonLabel] = useState(buttons.labels.next);

    const classes = useStyles();

    useEffect(() => {
        setEmails(getEmails());
    }, []);

    if (emails.length === 0) return null;

    const handleChoice = (choice) => {
        const correctChoice =
            (choice === CHOICES.PHISHING && emails[next].phish) ||
            (choice === CHOICES.LEGITIMATE && !emails[next].phish);

        if (correctChoice) setScore(score + 1);

        setShowNext(true);

        if (next === emails.length - 1) handleNext();
    };

    const handleNext = () => {
        // User has finished the quiz. Display the score.
        if (next === emails.length - 1) {
            setFinished(true);
            console.log(`You got ${score}/${emails.length} correct.`);
            return;
        }

        setNext(next + 1);
        setShowNext(false);
    };

    return (
        <div className={classes.container}>
            {finished && (
                <ContentBlock
                    header={`You got ${score}/${emails.length} correct.`}
                    text={completed.text}
                    className={{ header: classes.header }}
                />
            )}
            {!finished && (
                <Fade top>
                    <ContentBlock
                        header={emails[next].name}
                        text={emails[next].description}
                        className={{ header: classes.header }}
                    >
                        <div className={classes.buttonContainer}>
                            {showNext ? (
                                <Button
                                    endIcon={<NavigateNextIcon />}
                                    label={nextButtonLabel}
                                    onClick={handleNext}
                                />
                            ) : (
                                <Stack spacing={2} direction='row'>
                                    <Button
                                        startIcon={<WarningIcon />}
                                        label={buttons.labels.phishing}
                                        onClick={() =>
                                            handleChoice(CHOICES.PHISHING)
                                        }
                                    />
                                    <Button
                                        endIcon={<MarkEmailReadIcon />}
                                        label={buttons.labels.legitimate}
                                        onClick={() =>
                                            handleChoice(CHOICES.LEGITIMATE)
                                        }
                                    />
                                </Stack>
                            )}
                        </div>
                    </ContentBlock>
                    <Email src={emails[next].src} />
                </Fade>
            )}
            <Fade bottom>
                <div className={classes.footerContainer}>
                    <Stack spacing={2} direction='row'>
                        <Link to={ROUTES.LANDING_PAGE}>
                            <Button startIcon={<HomeIcon />} label='Home' />
                        </Link>
                        {finished && (
                            <Link to={ROUTES.PREFACE}>
                                <Button
                                    endIcon={<ReplayIcon />}
                                    label='Try Again'
                                />
                            </Link>
                        )}
                    </Stack>
                </div>
            </Fade>
        </div>
    );
};

export default Quiz;
