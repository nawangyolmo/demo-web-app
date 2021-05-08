import React from 'react'
import './Services.css';
import s1 from '../assets/images/S1.png';
import s2 from '../assets/images/S2.png'
import s3 from '../assets/images/S3.png'

function Services() {
    return (
        <div className='services' id='sv'>
            <h1>OUR SERVICES</h1>
            <section className='parent'>
                <section className='child'>
                    <img src={s1}></img>
                    <h5>UX/UI DESIGN</h5>
                    <br/>
                    <p>In today’s world, having an engaging user experience for products & apps is essential in contributing to success of a company. Good UX not only cuts development costs and increases revenue, but it also motivates users to interact with your content and boosts customer loyalty.
                    </p>
                    
                </section>
                <section className='child'>
                    <img src={s2}></img>
                    <h5>CORP. STRATEGY & PRESENTATIONS</h5>
                    <br/>
                    <p>Preparing for a pitch meeting or a sales showcase for your investors? - we can help you strategize & design your presentations. We’re well versed in communicating complex data figures and information in an efficient and comprehensible manner to audiences with a focus on story-boarding.
                    </p>
                </section>
                <section className='child'>
                    <img src={s3}></img>
                    <h5>BRANDING & MARKETING</h5>
                    <br/>
                    <p>Whether a new or established business or an organization, you can look to us to best articulate who you are, what you do, etc. and echo that message to your customers. Branding promotes customer trust and combined with good marketing can amplify growth of a business.
                    </p>
                </section>
            </section>
            
        </div>
    )
}

export default Services;

