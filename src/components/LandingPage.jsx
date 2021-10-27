// External
import React from 'react';
import { Link } from 'react-router-dom';

// Internal
import { ROUTES } from '../constants';

const LandingPage = () => {
    return <Link to={ROUTES.QUIZ}>Take the Quiz</Link>
};

export default LandingPage;