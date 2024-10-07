import React from 'react';
import ContactForm from '../components/ContactForm';
import ImageContact from '../../public/brandon-mbemba-high-resolution-logo-black-transparent.png';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact_text'>
                <h1>Travaillons ensemble</h1>
                <p>Je suis à votre disposition pour vous conseiller et vous accompagner. Remplissez ce formulaire, et je reviendrai vers vous rapidement pour répondre à vos besoins.</p>
                <hr />
                <img src={ImageContact} alt='Logo transparent Brandon Mbemba' />
            </div>
            <div className='contact_form'>
                <ContactForm/>
            </div>
        </div>
    );
};

export default Contact;