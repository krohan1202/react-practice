import React from 'react';

import './card.styles.css';

function Card (props) {
    // console.log(props.monsters);

    return(
    <div className='card-list'>
        
            {props.monsters.map((monster) => {
            return ([
                <div className='card-container'>
                <img
                alt='monster'
                src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
                />
                <h2> {monster.name} </h2>
                <p> {monster.email} </p>
                </div>
            ])
            })}
    </div>
    )
};

export default Card;