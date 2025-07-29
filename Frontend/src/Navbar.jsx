import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-left">
                <span className="breadcrumb-all"><i className="ri-menu-line"></i> All</span>
                <button className="rufus-btn">
                    <img src="/rufus.png" alt="Rufus" className="rufus-icon" />
                    Rufus
                </button>
            </div>
            <ul className="nav-links">
                <li><a href="/">Today's Deals</a></li>
                <li><a href="/">Prime Video</a></li>
                <li><a href="/">Buy Again</a></li>
                <li><a href="/">Customer Service</a></li>
                <li><a href="/">Registry</a></li>
                <li><a href="/">Gift Cards</a></li>
                <li><a href="/">Sell</a></li>
            </ul>
        </div>
    )
}

export default Navbar