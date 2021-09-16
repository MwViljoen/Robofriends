import React from 'react';
import './cardListStyles.css';
import Card from "../Card/Card";

import {useSelector} from "react-redux";

const CardList = (props) => {
    const searchField = useSelector(state => state.searchRobots.searchField);
    const {isPending, error} = useSelector(state => state.requestRobots)

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

    if(isPending){
        return <h1>Loading...</h1>
    }
    else if(!isPending && props.robots.length > 0){
        return cardListMapped;
    }
    else if(!isPending && props.robots.length < 1) {
        return <h1>Could not find robot with search field "{searchField}"</h1>
    }
    else {
        console.log(`Error rendering robots: print error ${error}`)
        return <h1>Seems like this app needs a service</h1>
    }
}

export default CardList;