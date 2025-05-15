import React from 'react';

function Header() {
    return (
       <header>
        <div className="logo">TechWave Solutions</div>
        <div className="navbar">
            <div className="menu">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>

                </ul>
            </div>
        </div>
       </header>
    );
}

export default Header;
