import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';
import Ratings from '../components/Ratings';
import { Navigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Accordion from '../components/Accordion';



const Logement = () => {
    const {id} = useParams();
     const logement = logements.find((logement) => logement.id === (id));
    if (!logement) {
        return <Navigate to="/Error404" />;}
    return  (
        <div className='logement'>
                <img src={logement.pictures[0]} alt="Logement"/>
            <div className='locationAndInfo'>
                <div className='location'>
                    <h1>{logement.title}</h1>
                    <a href={logement.site}>Voir le projet</a>
                </div>
            </div>
            <div className='accordion'>
                <div className='description'>
                    <Accordion title= 'Description' content={logement.description} />
                </div>
                <div className='equipements'>
                    <Accordion title = 'Compétences utilisées' content = {logement.equipments.map((equipment, index) => (<p key={index}>{equipment}</p>))} />
                </div>  
            </div>
        </div>
    );
};

export default Logement;