import React from 'react';
import { Link } from 'react-router-dom';

const Main = React.createClass({
    render() {
        // TODO change to hyperscript
        return (
            <div>
                <h2><Link to='/'>Hey I am testing</Link></h2>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
});

export default Main;
