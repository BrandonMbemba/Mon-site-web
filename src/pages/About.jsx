import React from 'react';
import ImageAbout from '../../public/Integrateur-Web.jpg';
import Accordion from '../components/Accordion';

const About = () => {

    return (
    <div className='about'>
        <div className='banner'>
            <img src= {ImageAbout} />
        </div>
        <div className='about_container'>
            <Accordion title={'Qui-suis-je ?'} content= {'Je m"appelle Brandon M"Bemba, 25 ans et diplômé OpenClassroom Formation Intégrateur Web. Je prend du plaisir a coder et créer des nouveaux projets, si vous souhaitez créer un nouveau site ou améliorer les performances de celui-ci, contactez-moi !'}/>
            <Accordion title={'Compétences'} content={'HTML - CSS - JavaScript - React - Redux - Git - GitHub - Figma - Visual Code - Trello - Slack - Swagger'}/>
        </div>
    </div>
    );
};

export default About;