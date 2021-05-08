import React from 'react';

import { Link } from 'react-router-dom';

// this.handleHoverOn = this.handleHoverOn.bind(this);
// this.handleHoverOff = this.handleHoverOff.bind(this);
// this.state = {expand: false};

function CardItem(props) {
    return (
        <>
            <li className='card__item'>
                <Link className='cards__item__link'to={props.path}>
                    <figure className='cards__item__pic-wrap' /*data-category={props.label}*/>
                        <img
                            src ={props.src}
                            className='cards__item__img'
                            alt={props.alt}
                            />
                    </figure>
                    <div className='cards__item__info  cards__item__info--blur'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        <div>
            
        </div>
        </>
    )
};
export default CardItem;
