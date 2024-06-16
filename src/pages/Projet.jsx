import React from 'react';
import { useParams } from 'react-router-dom';
import projets from '../data/projets.json';
import { Navigate } from 'react-router-dom';
import Accordion from '../components/Accordion';



const Projet = () => {
    const {id} = useParams();
     const projet = projets.find((projet) => projet.id === (id));
    if (!projet) {
        return <Navigate to="/Error404" />;}
    return  (
        <div className='projet'>
                <img src={projet.pictures[0]} alt="Projet"/>
            <div className='locationAndInfo'>
                <div className='location'>
                    <h1>{projet.title}</h1>
                    <a href={projet.site}>Voir le projet</a>
                </div>
            </div>
            <div className='accordion'>
                <div className='description'>
                    <Accordion title= 'Description' content={projet.description} />
                </div>
                <div className='equipements'>
                    <Accordion title = 'Compétences utilisées' content = {projet.equipments.map((equipment, index) => (<p key={index}>{equipment}</p>))} />
                </div>  
            </div>
        </div>
    );
};

export default Projet;