import React from 'react';
import Thumb from '../components/Thumb';
import logements from '../data/logements.json';
import ImageBanner from '../assets/Integrateur-Web.jpg';

const Home = () => {
    return (
        <div className='home'>
            <div className='banner'>
                <h1>Intégrateur Web basé à Bry-Sur-Marne, en Françe.</h1>
                <img src={ImageBanner} alt="Bry-Sur-Marne" />
            </div>
            <div className="gallery">
                {logements.map((logement) => (
                    <Thumb key={logement.id} logement={logement} />
                ))}
            </div>
        </div>
    );
};

export default Home;