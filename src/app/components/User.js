import React from 'react';
import { Redirect } from 'react-router';

export class User extends React.Component {

    navigateToHome() {
        this.props.history.push('/home');
    }

    render() {
        return(
            <div>
                <h3>The User Page</h3>
                <p>User ID : {this.props.match.params.id}</p>
                <button onClick={this.navigateToHome.bind(this)} className="btn btn-primary">Home!!</button>
            </div>
        );
    }
}