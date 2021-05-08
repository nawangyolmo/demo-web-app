import React from 'react'
import './Cards.css';
import CardItem from './CardItem';
import pic1 from '../assets/images/1.png';
import pic2 from '../assets/images/2.png';
import pic3 from '../assets/images/3.png';
import pic4 from '../assets/images/4.png';

function Cards() {
    return (
        <div className='cards' id='rp'>
            <h1>RECENT PROJECTS</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src={pic1}
                        text="Redefining Shipping and Mailing Business"
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        src={pic2}
                        text="Personalised Food Experience"
                        label='Luxury'
                        path='/services'
                        />

                    </ul>
                    <ul className='cards__items'> 
                    <CardItem
                        src={pic3}
                        text='Advance Data Insights'
                        label='Mystery'
                        path='/services'
                    />
                    <CardItem
                        src={pic4}
                        text='Doctor Consultation Platform'
                        label='Adventure'
                        path='/products'
                    />

                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards

