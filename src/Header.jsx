import React from 'react'

const Header = () => {
    return (
        <>
            <div className="logo">
                <img src="/logo.jpg" alt="Congress Logo" height={42} width={95} />
            </div>
            <div className="link">
                <a href="/" className='linkicon'><i className="ri-map-pin-line"></i></a>
                <p className='linktext'>Deliver to User</p>
                <p className='linktext' style={{ fontSize: 13 }}><b>Karur 639006</b></p>
            </div>
            <div className="search">
                <select className="search-dropdown">
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="groceries">Groceries</option>
                </select>
                <input type="text" placeholder="Search Amazon" className="search-input" />
                <button className="search-btn">
                    <i className="ri-search-line"></i>
                </button>
            </div>
            <div className="language-dropdown">
                <select className="language-select">
                    <option value="en">English</option>
                    <option value="ta">தமிழ்</option>
                    <option value="hi">हिन्दी</option>
                    <option value="te">తెలుగు</option>
                    <option value="ml">മലയാളം</option>
                </select>
            </div>
            <div className="account-section">
                <p className="account-text">
                    Hello, <strong>Guest</strong><br />
                    <span className="account-subtext">Account & Lists</span>
                </p>
                <p className="account-texts">
                    Returns &<br /><strong className='OrderText'>Orders</strong>
                </p>
            </div>
            <div className="cart">
                <a href="/" className="carticon">
                    <i className="ri-shopping-cart-line"></i>
                    <span className="cart-count">3</span>
                </a>
                <p className="carttext"><b>Cart</b></p>
            </div>
        </>
    )
}

export default Header