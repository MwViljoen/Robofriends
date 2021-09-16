import React, {useEffect} from 'react';
import './App.css';
import CardList from "./Components/CardList/CardList";
import SearchBox from "./Components/SearchBox/SearchBox";
import Scroll from "./Components/Scroll/Scroll";
import ErrorBoundary from "./Components/ErrorBoundry/ErrorBoundary";
//Redux
import {useSelector, useDispatch} from "react-redux";
import {setSearchField} from "./actions/searchFieldAction";
import {requestRobotsAction} from "./actions/requestRobotsAction";

//Functional component using react hooks
function App () {
    const dispatch = useDispatch();
    const searchField = useSelector(state => state.searchRobots.searchField);
    const {robots} = useSelector(state => state.requestRobots)

    useEffect(() => {
        dispatch(requestRobotsAction())
    }, []);

    const onSearchChange = (event) => {
        dispatch(setSearchField(event.target.value))
    }

    const filtered = robots.filter((string) => {
        return string.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox onSearch={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filtered}/>
                </ErrorBoundary>
            </Scroll>
        </div>
    );
}

export default App;

/*
 this was used before applying redux
 former method using hooks
// getting promise warning more on this here
        // https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks
        // https://www.robinwieruch.de/react-hooks-fetch-data
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const jsonData = await response.json();
                setRobots(jsonData);
            }
            catch (error) {console.log(`Fetch Data error: ${error}`);}
        }
        fetchData();
*/