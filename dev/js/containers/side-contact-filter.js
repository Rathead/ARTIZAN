import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectUserProducts} from '../actions/index'


class SideContacts extends Component {

    contactList() {
        return this.props.users.map((user) => {
            return (
                <li
                    key={user.id}
                    onClick={() => this.props.selectUserProducts(user)}
                >
                    {user.first} {user.last}
                </li>
            );
        });
    }
    
    render() {
        return (
            <div className="ver-nav-bar">
                <div className="ver-menu-btn">PRODUCTOS DE:</div>
                <ul>
                    {this.contactList()}
                </ul>
            </div>
        );
    }
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUserProducts: selectUserProducts}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(SideContacts);

