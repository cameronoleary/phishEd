// External
import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@material-ui/styles';

// Internal
import Email from './Email';
import copy from '../../copy';
import Review from './Review';
import Button from '../Button';
import { ROUTES } from '../../constants';
import { getEmails } from '../../utils/quiz';
import ContentBlock from '../Infographic/Content/ContentBlock';

// Assets
import HomeIcon from '@mui/icons-material/Home';
import ReplayIcon from '@mui/icons-material/Replay';
import GradingIcon from '@mui/icons-material/Grading';
import WarningIcon from '@mui/icons-material/ReportGmailerrorred';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

const useStyles = makeStyles({
    buttonContainer: {
        marginTop: '1rem',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '2.5rem',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    contentContainer: {
        display: 'flex',
        padding: '2.5rem',
        marginLeft: '1rem',
        textAlign: 'center',
        alignItems: 'center',
    },
    header: {
        color: 'black',
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
    const [review, setReview] = useState(false);
    const [finished, setFinished] = useState(false);

    const classes = useStyles();

    useEffect(() => {
        setEmails(getEmails());
    }, []);

    if (emails.length === 0) return null;

    const handleChoice = (choice) => {
        const correctChoice =
            (choice === CHOICES.PHISHING && emails[next].phish) ||
            (choice === CHOICES.LEGITIMATE && !emails[next].phish);

        emails[next].correct = correctChoice;

        if (correctChoice) setScore(score + 1);

        handleNext();
    };

    const handleNext = () => {
        // User has finished the quiz. Display the score.
        if (next === emails.length - 1) {
            setFinished(true);
            return;
        }

        setNext(next + 1);
    };

    const handleReview = () => {
        setReview(true);
    };

    return (
        <div className={classes.container}>
            {review && <Review emails={emails} />}
            {finished && !review && (
                <Fade top>
                    <ContentBlock
                        header={`You got ${score}/${emails.length} correct.`}
                        text={completed.text}
                        className={{ header: classes.header }}
                    >
                        <div className={classes.buttonContainer}>
                            <Button
                                endIcon={<GradingIcon />}
                                label={buttons.labels.review}
                                onClick={() => handleReview()}
                            />
                            <Link to={ROUTES.PREFACE}>
                                <Button
                                    endIcon={<ReplayIcon />}
                                    label='Try Again'
                                />
                            </Link>
                        </div>
                    </ContentBlock>
                </Fade>
            )}
            {!finished && !review && (
                <Fade top>
                    <div className={classes.contentContainer}>
                        <ContentBlock
                            header={emails[next].name}
                            text={emails[next].description}
                            className={{ header: classes.header }}
                        >
                            <div className={classes.buttonContainer}>
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
                            </div>
                        </ContentBlock>
                        <Email src={emails[next].src} />
                    </div>
                </Fade>
            )}
            <div className={classes.footerContainer}>
                <Stack spacing={2} direction='row'>
                    <Link to={ROUTES.LANDING_PAGE}>
                        <Button startIcon={<HomeIcon />} label='Home' />
                    </Link>
                    {review && (
                        <Link to={ROUTES.PREFACE}>
                            <Button
                                endIcon={<ReplayIcon />}
                                label='Try Again'
                            />
                        </Link>
                    )}
                </Stack>
            </div>
        </div>
    );
};

export default Quiz;
