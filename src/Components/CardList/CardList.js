import React from 'react';
import './cardListStyles.css';
import Card from "../Card/Card";

const CardList = (props) => {
    const cardListMapped = (
        <div>
            {props.robots.map((robot) => (
                <Card
                    key={robot.id}
                    name={robot.name}
                    username={robot.username}
                    email={robot.email}
                />
            ))}
        </div>
    )

    return props.robots.length > 0 ? cardListMapped : <h1>Loading...</h1>
}

export default CardList;