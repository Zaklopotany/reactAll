import React, {Component} from 'react';

class ErrorBoundry extends Component {

    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, errorInfo) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>;

        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundry;
