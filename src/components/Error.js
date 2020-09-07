import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

const Error = ((props) => {
    return (
            <div>
                {
                    props.invalidHackers && props.invalidHackers.map((invalidHacker, index) => (
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 error" key={index}>
                            <div id="list">
                                <div className="error-msg">
                                    <i className="fa fa-times-circle"></i>
                                    <p>Error! No menu generated for {invalidHacker}</p>
                                </div>
                            </div>
                        </div>
                        )) 
                }
            </div>
    )
});

export default Error;
