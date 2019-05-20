import React, { Component } from 'react';

class Step extends Component {
    render() {
        return (
            <div>
                <div>{this.props.number}</div>
                <div>{this.props.title}</div>
                <div>{this.props.description}</div>
            </div>
        );
    }
}

export default Step;