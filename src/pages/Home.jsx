import React from 'react';
import Thumb from '../components/Thumb';
import projets from '../data/projets.json';
import ImageBanner from '../../public/IMG_0973.webp';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <div className='banner'>
                <h1>Développeur Intégrateur Web basé à Bry-Sur-Marne, en Françe.</h1>
                <img src={ImageBanner} alt="Image représentant une ville étincelante" />
            </div>
            <div className='work'>
                <h2>Travaux récents</h2>
                <p>Mes récents projets démontrent ma maîtrise des technologies web, notamment avec React, JavaScript, HTML et CSS. J'ai travaillé sur la création d'interfaces dynamiques, l'intégration d'API, et l'optimisation des performances des sites. Chaque projet m'a permis de relever des défis uniques en matière de développement, tout en garantissant une expérience utilisateur fluide et moderne. <br/>Vous retrouverez l'ensemble de mes projets sur ma page Github</p>
            </div>
            <div className="gallery">
                {projets.map((projet) => (
                    <Thumb key={projet.id} projet={projet} />
                ))}
            </div>
            <div className='contactus'>
                <h2>Collaborons ensemble</h2>
                <p>Vous envisagez de lancer une entreprise ? Vous souhaitez transformer un passe-temps en quelque chose de plus grand ? Ou peut-être avez-vous un projet créatif à partager avec le monde.
                Quelle que soit votre ambition, la manière dont vous racontez votre histoire en ligne peut tout changer.</p>                
                <NavLink to="/Contact">
                    <button>Contactez moi</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Home;