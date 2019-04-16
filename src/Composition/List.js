import React from 'react';
import Card from './Card';
import './List.css';

// implemented destructuring {props} ==> {header, cards}

function List({header, cards}) {
    const cardsArray = cards.map((card, i) => <Card title={card.title} content={card.content} key={i} />);
    return (
    <div>
        <section className="list">
            <header>{header}</header>
            <div className="List-cards">
                {cardsArray}
            </div>
        </section>
    </div>
    )
}

export default List;