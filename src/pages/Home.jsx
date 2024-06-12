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
            <div className='work'>
                <h2>Travaux récents</h2>
                <p>Je suis passionné par le développement web et je suis toujours à la recherche de nouveaux projets à réaliser. Je suis spécialisé dans l'intégration web et je suis capable de réaliser des projets de qualité. Je suis également capable de travailler en équipe et de m'adapter à toutes les situations. Je suis disponible pour travailler sur des projets de toutes tailles et je suis toujours prêt à relever de nouveaux défis. N'hésitez pas à me contacter pour discuter de vos projets et de vos besoins.</p>
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