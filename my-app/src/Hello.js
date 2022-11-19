import React from 'react';
import './Hello.css';

// Creating first component
class Hello extends React.Component {
    render() {
        // return <h1>Hello World</h1>

        return (
            <div className = 'f1 tc'>
                <h1>Hello World</h1>
                {/* <p>Welcome to React!</p> */}
                <p>{this.props.greeting}</p>
            </div>
        );
    }
}

export default Hello;