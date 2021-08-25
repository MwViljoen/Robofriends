import React from 'react';
import './searchBoxStyles.css';

const SearchBox = (props) => {
    return (
        <div className='pa2'>
            <input
                type="Search"
                placeholder='Search Robots'
                className='pa3 ba b--green bg-lightest-blue'
                onChange={props.onSearch}
            />
        </div>
    );
}

export default SearchBox;