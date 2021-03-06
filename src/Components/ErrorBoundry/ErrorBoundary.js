import React, {Component} from 'react';
// React has not yet implemented hooks for componentDidCatch
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {
        return this.state.hasError ? <h1>OOOPS!!! Something unexpected/unwanted happened</h1> : this.props.children;
    }
}

export default ErrorBoundary;