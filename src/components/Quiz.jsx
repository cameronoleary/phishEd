// External
import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';

// Assets
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import WarningIcon from '@mui/icons-material/ReportGmailerrorred';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

// Internal
import copy from '../copy';
import { getImages } from '../utils/quiz';
import { ROUTES } from '../constants';

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
        maxWidth: '50rem',
        margin: '1rem 0 1rem 0',
        justifyContent: 'center',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'center',
        justifyContent: 'center',
    },
    paragraph: {
        width: '100%',
    },
});

const Quiz = () => {
    const [next, setNext] = useState(0);
    const [score, setScore] = useState(0);
    const [images, setImages] = useState([]);
    const [showNext, setShowNext] = useState(false);
    const [finished, setFinished] = useState(false);
    const [nextButtonText, setNextButtonText] = useState(
        copy.quiz.buttons.labels.next
    );

    const classes = useStyles();

    useEffect(() => {
        setImages(getImages());
    }, []);

    if (images.length === 0) return null;

    const handleClick = (flag) => {
        if (flag === 1) {
            if (images[next].phish) {
                console.log('Correct! This is a phishing email.');
                setScore(score + 1);
            } else {
                console.log('Incorrect! This is a legitimate email.');
            }
        } else if (flag === 2) {
            if (images[next].phish) {
                console.log('Incorrect! This is a phishing email.');
            } else {
                console.log('Correct! This is a legitimate email.');
                setScore(score + 1);
            }
        }

        setShowNext(true);

        if (next === images.length - 1) {
            setNextButtonText(copy.quiz.buttons.labels.finishQuiz);
            return;
        }
    };

    const handleNext = () => {
        // User has finished the quiz. Display the score.
        if (next === images.length - 1) {
            setFinished(true);
            console.log(`Your score is ${score}/${images.length}`);
            return;
        }

        setNext(next + 1);
        setShowNext(false);
    };

    return (
        <div className={classes.container}>
            {finished && (
                <p
                    className={classes.paragraph}
                >{`Your score is ${score}/${images.length}`}</p>
            )}
            {!finished && (
                <div className={classes.buttonContainer}>
                    <p className={classes.paragraph}>
                        {images[next].description}
                    </p>
                    {showNext ? (
                        <Button
                            variant='contained'
                            endIcon={<NavigateNextIcon />}
                            onClick={handleNext}
                        >
                            {nextButtonText}
                        </Button>
                    ) : (
                        <Stack spacing={2} direction='row'>
                            <Button
                                variant='contained'
                                startIcon={<WarningIcon />}
                                onClick={() => handleClick(1)}
                            >
                                {copy.quiz.buttons.labels.phishing}
                            </Button>
                            <Button
                                variant='contained'
                                endIcon={<MarkEmailReadIcon />}
                                onClick={() => handleClick(2)}
                            >
                                {copy.quiz.buttons.labels.legitimate}
                            </Button>
                        </Stack>
                    )}
                </div>
            )}
            <Fade top>
                <div className={classes.paragraph}>
                    <img alt='img' src={images[next].src} />
                </div>
            </Fade>
            <Link to={ROUTES.LANDING_PAGE}>
                <Button variant='contained' startIcon={<HomeIcon />}>
                    Home
                </Button>
            </Link>
        </div>
    );
};

export default Quiz;
