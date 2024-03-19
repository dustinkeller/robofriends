import React from 'react';

const Card = ({ image, name, email }) => {
    return (
        <div className='bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img src={`https://robohash.org/${image}?200x200`} alt='robots' />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;