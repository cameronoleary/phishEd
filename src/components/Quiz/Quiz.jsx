// External
import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@material-ui/styles';

// Assets
import HomeIcon from '@mui/icons-material/Home';
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
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '1rem',
        justifyContent: 'center',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'center',
        flexDirection: 'column',
        alignContent: 'center',
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
    const { labels } = copy.quiz.buttons;

    const [next, setNext] = useState(0);
    const [score, setScore] = useState(0);
    const [emails, setEmails] = useState([]);
    const [showNext, setShowNext] = useState(false);
    const [finished, setFinished] = useState(false);
    const [nextButtonLabel, setNextButtonLabel] = useState(labels.next);

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

        if (next === emails.length - 1) {
            setNextButtonLabel(labels.finishQuiz);
            return;
        }
    };

    const handleNext = () => {
        // User has finished the quiz. Display the score.
        if (next === emails.length - 1) {
            setFinished(true);
            console.log(`Your score is ${score}/${emails.length}`);
            return;
        }

        setNext(next + 1);
        setShowNext(false);
    };

    return (
        <div className={classes.container}>
            {finished && (
                <ContentBlock
                    text={`Your score is ${score}/${emails.length}`}
                />
            )}
            {!finished && (
                <Fade top>
                    <ContentBlock text={emails[next].description}>
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
                                        label={labels.phishing}
                                        onClick={() =>
                                            handleChoice(CHOICES.PHISHING)
                                        }
                                    />
                                    <Button
                                        endIcon={<MarkEmailReadIcon />}
                                        label={labels.legitimate}
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
                <Link to={ROUTES.LANDING_PAGE}>
                    <Button startIcon={<HomeIcon />} label='Home' />
                </Link>
            </Fade>
        </div>
    );
};

export default Quiz;
