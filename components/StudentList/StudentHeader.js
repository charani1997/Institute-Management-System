import React, { Component } from 'react';

class StudentHeader extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-light bg-success'>
                        <div><a href='/' className='navbar-brand'>Student Management App</a></div>

                    </nav>
                </header>
            </div>
        );
    }
}

export default StudentHeader