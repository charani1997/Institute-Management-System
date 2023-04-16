import React, { Component } from 'react';

class StaffHeader extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-light bg-success'>
                        <div><a href='/' className='navbar-brand'>Staff Management App</a></div>

                    </nav>
                </header>
            </div>
        );
    }
}

export default StaffHeader