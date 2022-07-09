// rcfc

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Lifecircle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color : 'Black'
        }

        this.setColor = this.setColor.bind(this)
        this.removesetColor = this.removesetColor.bind(this)
    }

    setColor () {
        this.setState({ color: 'blue'})
    }
    removesetColor () {
        this.setState ({color: 'black'})
    }

    render() {
        return (
            <div>
                <div>{this.state.color}</div>
                <button onClick={this.setColor}>Click</button>
                <button onClick={this.removesetColor}>Click again</button>
            </div>
        );
    }
}

export default Lifecircle;