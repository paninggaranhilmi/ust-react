import React from 'react';

const Dashboard = () => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
            <a class="navbar-brand" href="#">Navbar</a>
                </div>
            </nav>
            <div className="div">
                {props.children}
            </div>
        </div>
    )
}