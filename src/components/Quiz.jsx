// External
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

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
                        <button className={classes.button} onClick={handleNext}>
                            {nextButtonText}
                        </button>
                    ) : (
                        <>
                            <button
                                className={classes.button}
                                onClick={() => handleClick(1)}
                            >
                                {copy.quiz.buttons.labels.phishing}
                            </button>
                            <button
                                className={classes.button}
                                onClick={() => handleClick(2)}
                            >
                                {copy.quiz.buttons.labels.legitimate}
                            </button>
                        </>
                    )}
                </div>
            )}
            <div className={classes.paragraph}>
                <img alt='img' src={images[next].src} />
            </div>
            <Link to={ROUTES.LANDING_PAGE}>
                <button className={classes.button}>Home</button>
            </Link>
        </div>
    );
};

export default Quiz;
