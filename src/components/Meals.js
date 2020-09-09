import React, {Component} from 'react';

class Meals extends Component {
    render() {
        var hackersSchedule = {};
        this.props.hackers ? hackersSchedule = this.props.hackers : null;
        
        var fullScheduleList = Object.keys(hackersSchedule).map(function (key) {
          return <div key={key}>
            {
              hackersSchedule[key].map((hacker) =>
                <li key={hacker} className="morning">Breakfast for {hacker} on {key}</li>
              )
            }
    
            {
              hackersSchedule[key].map((hacker) =>
                <li key={hacker} className="afternoon">Lunch for {hacker} on {key}</li>
              )
            }
    
            {
              hackersSchedule[key].map((hacker) =>
                <li key={hacker} className="night">Dinner for {hacker} on {key}</li>
              )
            }
          </div>
        });

        return (<div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
          <ol id="list">
            {fullScheduleList}
          </ol>
        </div>)
      }   
}

export default Meals;