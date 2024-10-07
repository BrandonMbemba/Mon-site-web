import React from 'react';
import ImageAbout from '../../public/485549AF-C520-4C3F-A1FE-3B88E81D8587.webp';
import Accordion from '../components/Accordion';
import { NavLink } from 'react-router-dom';

const About = () => {

    return (
    <div>
        <div className='about'>
            <div className='about_title'>
                <h1>À propos de moi</h1>
                <div className='about_container'>
                <Accordion title={'Qui-suis-je ?'} content= {"Je suis Brandon M'BEMBA, 26 ans, passionné par le développement web et la création de projets innovants. J'adore relever de nouveaux défis, que ce soit dans la vie ou dans le domaine du code et de l'optimisation. Mon objectif est d'apporter mon aide là où elle est la bienvenue. Vous souhaitez créer un site moderne, améliorer les performances du vôtre ou simplement échanger ? N'hésitez pas, je suis là pour vous !"}/>
                <Accordion title={'Compétences'} content={'HTML - CSS - JavaScript - React - Redux - Git - GitHub - Figma - Visual Code - Trello - Slack - Swagger'}/>
            </div>
            </div>
            <div className='banner'>
                <img src= {ImageAbout} alt="Image de Brandon M'bemba" />
                <div className='quote'>
                    <p className='earl'>"Tout commence par une idée." - Earl Nightingale</p>
                </div>
            </div>
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

export default About;