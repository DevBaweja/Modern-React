import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

import 'semantic-ui-css/semantic.min.css';
/*
const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        pos => console.log(pos),
        err => console.log(err)
    );
    return (
        <div>
        </div>
    );
};
*/
class App extends Component {
    /*
    constructor(props) {
        super(props);
        this.state = { lat: null, errmsg: '' };
    }
    */
    state = { lat: null, errmsg: '' };

    getGeoLocation = () => {
        window.navigator.geolocation.getCurrentPosition(
            pos => {
                this.setState({ lat: pos.coords.latitude });
            },
            err => {
                this.setState({ errmsg: err.message });
            }
        );
    };
    componentDidMount = () => {
        console.log('Mount');
        this.getGeoLocation();
    };
    componentDidUpdate = () => {
        console.log('Update');
    };

    renderContent = () => {
        if (this.state.errmsg && !this.state.lat) {
            return <div>Error: {this.state.errmsg}</div>;
        }
        if (!this.state.errmsg && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        return <Spinner message="Please accept location request." />;
    };

    render() {
        return <div>{this.renderContent()}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
