import React from 'react'
import './Testimonials.css';

function Testimonials() {
    return (
        <div className='tests' id='test'>
            <h1>WHAT OUR CLIENTS SAY</h1>
            <section className='parent'>
                <section className='child'>
                    <p>
                    "Highly Recommended. We worked with the Team to get complete revamp of our Mobile App. They are thorough professionals and understand the consumer mobile space in & out. With very few briefings, team understood the requirements and delivered us the improvised version of the flow in record time."
                    </p>
                    <br/>
                    <h5>-Ruchika Sharma, Co-Founder, CoFrsh</h5>
                </section>
                <section className='child'>
                    <p>
                    "What I love about working with Deepak is his innate ability to simplify complex problem statements. He understands what you are trying to communicate to your consumer very well. His design and solutions will bring a smile on you face (you ar like- this is so clear and fascinating way to communicate; why didn't it strike us!). I found him and his team empathetic and sincere."
                    </p>
                    <br/>
                    <h5>-Agam Khare, Absolute Foods</h5>
                </section>
            </section>
            {/* <div className='test__container'>
                <div className='test__wrapper'>
                    <ul className='test__text'>
                    <TestItem 
                        text="Highly Recommended. We worked with the Team to get complete revamp of our Mobile App. They are thorough professionals and understand the consumer mobile space in & out. With very few briefings, team understood the requirements and delivered us the improvised version of the flow in record time."
                        author="Ruchika Sharma, Co-Founder, CoFrsh"
                        />
                    <TestItem 
                        text="What I love about working with Deepak is his innate ability to simplify complex problem statements. He understands what you are trying to communicate to your consumer very well. His design and solutions will bring a smile on you face (you ar like- this is so clear and fascinating way to communicate; why didn't it strike us!). I found him and his team empathetic and sincere."
                        author="Agam Khare, Absolute Foods"
                        />
                    </ul>
                    <ul className='test__text'>
                    
                    </ul>
                </div>
            </div> */}
            
        </div>
    )
}

export default Testimonials;

