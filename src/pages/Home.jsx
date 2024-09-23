import React from 'react';
import Thumb from '../components/Thumb';
import projets from '../data/projets.json';
import ImageBanner from '../../public/night-city-city-5120x2880-9753.jpg';
import Image2 from '../../public/BrandonMbemba_transparent-.png';
import Image3 from '../../public/brandon-mbemba-high-resolution-logo-white-transparent.png';
import ContactForm from '../components/ContactForm';

const Home = () => {
    return (
        <div className='home'>
            <div className='banner'>
                <h1>Intégrateur Web basé à Bry-Sur-Marne, en Françe.</h1>
                <img src={ImageBanner} alt="Image représentant une ville étincelante" />
            </div>
            <div className='work'>
                <h2>Travaux récents</h2>
                <p>Je suis passionné par le développement web et je suis toujours à la recherche de nouveaux projets à réaliser. Je suis spécialisé dans l'intégration web et je suis capable de réaliser des projets de qualité. Je suis également capable de travailler en équipe et de m'adapter à toutes les situations. Je suis disponible pour travailler sur des projets de toutes tailles et je suis toujours prêt à relever de nouveaux défis. N'hésitez pas à me contacter pour discuter de vos projets et de vos besoins.</p>
            </div>
            <div className="gallery">
                {projets.map((projet) => (
                    <Thumb key={projet.id} projet={projet} />
                ))}
            </div>
            <div className='contact'>
                <ContactForm />
                <img src={Image3} alt='Logo transparent Brandon Mbemba' />
            </div>
        </div>
    );
};

export default Home;