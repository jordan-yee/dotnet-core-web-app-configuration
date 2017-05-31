import React from 'react';

export class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}

HelloWorld.defaultProps = {
    name: 'World'
};

export default HelloWorld;