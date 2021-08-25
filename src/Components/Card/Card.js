import React, {Component} from 'react';
import './cardStyles.css';

class Card extends Component {
    render() {
        const {name, username, email} = this.props;

        return (
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img src={`https://robohash.org/${username}?size=200x200`} alt="robot"/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
    }
}

export default Card;