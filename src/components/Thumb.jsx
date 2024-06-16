import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Thumb = ({ projet }) => {
    return (
        <Link to={`/projet/${projet.id}`} className='thumbs'>
            <div className='thumbs'>
                <img src={projet.cover} alt={projet.title} />
                <h2>{projet.title}</h2>
            </div>
        </Link>
    );
};

Thumb.propTypes = {
    projet: PropTypes.object.isRequired
};

export default Thumb;