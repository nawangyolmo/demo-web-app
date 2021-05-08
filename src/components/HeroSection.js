import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import playback from '../assets/videos/video-2.mp4';

function HeroSection() {
    return (
        <section id= "home">
        <div className='hero-container'>
            {/* <video src ={playback} autoPlay loop muted /> */}
            <h1> Let’s tell stories through design.</h1>
            <p>Design Tribe is a global digital product, corporate strategy & design studio from India. We aid inspired and groundbreaking companies by building their identity, designing platforms that promote engagement and drive consumer action through marketing campaigns.</p>
            <div className='hero-btns'>
                <Button className='btns'buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET IN TOUCH
                </Button>
                {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER <i className ='far fa-play-circle' />
                </Button> */}
            </div>
        </div>
        </section>
    )
}

export default HeroSection
