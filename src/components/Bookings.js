import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Bookings extends Component {

    constructor(props) {
      super(props);
    }

    handleGuestInfo(e) {
      if (e.target.value) {
        const hackerList = e.target.value.split(/(?:\n|\\n)/);
        this.props.handleGuestInfo(hackerList);
      }
    }

    handleDateInfo(e) {
      if (e.target.value) {
        const dateList = e.target.value.split(/(?:\n|\\n)/);
        this.props.handleDateInfo(dateList);
      }
    }

    render() {
        return (
      <div className="row">
        <TextField
          className="col-md-6"
          multiline
          rows="4"
          placeholder="Enter the hacker list (one hacker per line)"
          name="hackers"
          onChange={this.handleGuestInfo.bind(this)}
        />
        <TextField
          className="col-md-6"
          multiline
          rows="4"
          placeholder="Enter the date range for each hacker's stay (one range per line)"
          name="dates"
          onChange={this.handleDateInfo.bind(this)}
        />
        <Button variant="outlined" color="primary" className="block-center" 
          onClick={this.props.handleButtonClick}>Get Meals Schedule</Button>
        </div>);
    }
}

export default Bookings;