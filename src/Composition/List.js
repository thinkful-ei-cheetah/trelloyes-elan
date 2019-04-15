import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
    const cardsArray = props.cards.map((card, i) => <Card title={card.title} content={card.content} key={i} />);
    return (
    <div>
        <section className="list">
            <header>{props.header}</header>
            <div className="List-cards">
                {cardsArray}
            </div>
        </section>
    </div>
    )
}

export default List;