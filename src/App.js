import React, {Component} from 'react';
import './App.css';
import CardList from "./Components/CardList/CardList";
import SearchBox from "./Components/SearchBox/SearchBox";
import Scroll from "./Components/Scroll/Scroll";
import ErrorBoundry from "./Components/ErrorBoundry/ErrorBoundry";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchField: '',
            filteredRobots: []
        }
        this.onSearch = this.onSearch.bind(this);
    }

    /* another way to avoid binding in constructor is to change the event into an arrow function
    * onSearch = (event) => {} then the binding in constructor can be removed
    * */
    onSearch(event) {
        const robots = this.state.robots;

        const filteredRobots = robots.filter((string) => {
            return string.name.toLowerCase().includes(event.target.value.toLowerCase());
        });

        this.setState({
            searchFiled: event,
            filteredRobots: filteredRobots
        });
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const jsonData = await response.json();
            this.setState({
                robots: jsonData,
                filteredRobots: jsonData
            });
        } catch (error) {
            console.log(`Fetch Data error: ${error}`);
        }
    }

    render() {
        const {filteredRobots} = this.state;
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox onSearch={this.onSearch}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default App;