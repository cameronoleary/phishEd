import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';

const Email = ({ email }) => {
    useEffect(() => [email]);

    return (
        <Fade top>
            <img alt='email' src={email} />
        </Fade>
    );
};

export default Email;
