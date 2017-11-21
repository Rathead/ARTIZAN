import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class HeaderBar extends Component {
    render() {
        if (!this.props.loggedUser) {
            return (
                <div className="hor-nav-bar">
                    <div className= "flex-container">
                        <div className="title">
                            ARTIZAN
                        </div>
                    </div>
                    <div className= "flex-container">
                        <div className="hor-menu-btn">Sign In</div>
                        <div className="hor-menu-btn">Sign Up</div>
                    </div>
                </div>
            );
        }

        return (
            <div>

            </div>
        );
    }
}

// "state.loggedUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        headerNavBar: state.loggedUser
    };
}

export default connect(mapStateToProps)(HeaderBar);
