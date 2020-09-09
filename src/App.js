import React, { Component } from 'react';
import Bookings from './components/Bookings';
import Meals from './components/Meals';
import Error from './components/Error';

import { isValidDate, getDateRange, sortArray } from './utils/utils';

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

    handleGuestInfo(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleDateInfo(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleButtonClick() {
        const results = this.getHackersData();
        this.setState({
            invalidHackers: results[0],
            validHackers: results[1]
        });
    }

    getHackersData() {
        const hackerList = this.getLines(this.state.hackers);
        const dateList = this.getDates();

        var invalidHackers = [];
        var validHackers = [];

        for (var i = 0; i < hackerList.length; i++) {
            if (!isValidDate(dateList[i])) {
                invalidHackers.push(hackerList[i]);
            } else {
                const dates = getDateRange(dateList[i]);
                for (var j = 0; j < dates.length; j++) {
                    validHackers.push({
                        name: hackerList[i],
                        date: dates[j]
                    });
                }
            }
        }

        sortArray(validHackers);

        validHackers = validHackers.reduce(function (result, userDetails) {
            result[userDetails.date] = result[userDetails.date] || [];
            result[userDetails.date].push(userDetails.name);
            return result;
        }, Object.create(null));

        return [invalidHackers, validHackers];
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
                <Bookings handleGuestInfo={this.handleGuestInfo} handleDateInfo={this.handleDateInfo} handleButtonClick={this.handleButtonClick.bind(this)}></Bookings>
                <Error invalidHackers={this.state.invalidHackers}></Error>
                <Meals hackers={this.state.validHackers}></Meals>
            </div>
        </div>);
    }
}

export default App;