import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {showProducts} from "../actions/index";

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class SideBar extends Component {
    render() {
        if (!this.props.loggedUser) {
            return (
                <div className="ver-nav-bar">
                    <div className="ver-menu-btn"
                        onClick={() => this.props.showProducts()}>
                        Inicio
                    </div>
                    <div className="ver-menu-btn">Explorar</div>
                </div>
            );
        }

        return (
            <div>

            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        headerNavBar: state.loggedUser
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({showProducts: showProducts}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SideBar);

