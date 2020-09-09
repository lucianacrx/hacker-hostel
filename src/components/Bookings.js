import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Bookings extends Component {

    render() {
        return (
      <div className="row">
        <TextField
          className="col-md-6"
          multiline
          rows="4"
          placeholder="Enter the hacker list (one hacker per line)"
          name="hackers"
          onChange={this.props.handleInputChange}
        />
        <TextField
          className="col-md-6"
          multiline
          rows="4"
          placeholder="Enter the date range for each hacker's stay (one range per line)"
          name="dates"
          onChange={this.props.handleInputChange}
        />
        <Button variant="outlined" color="primary" className="block-center" 
          onClick={this.props.handleGuestInfo}>Get Meals Schedule</Button>
        </div>);
    }
}

export default Bookings;