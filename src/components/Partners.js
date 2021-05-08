import React from 'react'
import './Partners.css';
import p1 from '../assets/images/Partner+1.png';
import p2 from '../assets/images/Partner+2.png';
import p3 from '../assets/images/Partner+3.png';
import p4 from '../assets/images/Partner+4.png';
import p5 from '../assets/images/Partner+5.png';
import p6 from '../assets/images/Partner+6.png';
import p7 from '../assets/images/Partner+7.png';
import p8 from '../assets/images/Partner+8.png';
import p9 from '../assets/images/Partner+9.png';
import p10 from '../assets/images/Partner+10.png';


function Partners() {
    return (
        <div className='partners' id='test'>
            <h1>PARTNERS</h1>
            <section className='parent'>
                <img src={p1}></img>
                <img src={p2}></img>
                <img src={p3}></img>
                <img src={p4}></img>
                <img src={p5}></img>
            </section>
            <section className='parent'>
                <img src={p6}></img>
                <img src={p7}></img>
                <img src={p8}></img>
                <img src={p9}></img>
                <img src={p10}></img>
            </section>
        </div>
    )
}

export default Partners;

