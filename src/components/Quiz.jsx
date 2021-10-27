// External
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Internal
import { ROUTES } from '../constants';
import { getImages } from '../utils/quiz';

const Quiz = () => {
    const [next, setNext] = useState(0);
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(getImages());
    }, []);

    const handleNext = () => {
        if (next === images.length - 1) return;

        setNext(next + 1);
    };

    if (images.length === 0) return null;

    return (
        <>
            <img alt='img' src={images[next].src} />
            <button onClick={handleNext}>Next</button>
            <Link to={ROUTES.LANDING_PAGE}>Home</Link>
        </>
    );
};

export default Quiz;