import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

const Meals = ((props) => {
    return (
        <div>
                {
                    props.hackers && props.hackers.map((hacker, index) => (
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" key={index}>
                            <ol id="list">
                                <div>
                                    <li className="morning">Breakfast for {hacker}</li>
                                    <li className="afternoon">Lunch for {hacker}</li>
                                    <li className="night">Dinner for {hacker}</li>
                                </div>
                            </ol>
                        </div>
                        )) 
                }
        </div>
    )
});
export default Meals;
