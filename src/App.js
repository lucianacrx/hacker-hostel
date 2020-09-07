import React, { Component } from 'react';
import Bookings from './components/Bookings';
import Meals from './components/Meals';
import Error from './components/Error';

import { isValidDate } from './utils/utils';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hackers: [],
            dates: [],
            invalidHackers: [],
            validHackers: []
        };
    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleButtonClick(event) {
        const invalidHackersList = this.getInvalidHackers();
        this.setState({invalidHackers: invalidHackersList});
    }

    getInvalidHackers() {
        const hackerList = this.getLines(this.state.hackers);
        const dateList = this.getDates();

        var invalidHackers = [];
        var validHackers = [];

        for (var i = 0; i < hackerList.length; i++) {
            if (!isValidDate(dateList[i])) {
                invalidHackers.push(hackerList[i]);
            } else {
                validHackers.push(hackerList[i]);
            }
        }

        this.setState({validHackers: validHackers});
        
        return invalidHackers;
    }

    getDates() {
        const dates = this.getLines(this.state.dates);
        return dates.map(range => {
            const splittedDate = range.split(" to ");
            return {
                from: splittedDate[0],
                to: splittedDate[1]
            };
        });
    }

    getLines(text) {
        if (text !== undefined) {
            return text.split('\n');
        } else {
            return [];
        }
    }

    render() {
        return (<div className="container-fluid">
            <center>
                <h2>Hacker Hostel</h2>
            </center>
            <div className="container">
                <Bookings handleInputChange={this.handleInputChange.bind(this)} handleButtonClick={this.handleButtonClick.bind(this)}></Bookings>
                <Error invalidHackers={this.state.invalidHackers}></Error>
                <Meals hackers={this.state.validHackers}></Meals>
            </div>
        </div>);
    }
}

export default App;