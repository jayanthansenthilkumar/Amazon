import React from 'react';
import { useState } from 'react';
import './laptop.css';
import { colors } from '@mui/material';

function Laptop(props) {
    const { count, onAddToCart, onUpdateCount } = props;
    const handleAdd = () => onUpdateCount(count + 1);
    const handleRemove = () => onUpdateCount(count - 1);
    

    return (
        <div className="container">
            <img
                className="productimage"
                src={props.img}
                alt="Laptop"
            />

            <div className="details">
                <h3 className="title">
                    {props.title}
                </h3>

                <button className="reviews">
                    {Array.from({ length: 5 }, (_, i) => (
                        <span
                            key={i}
                            className={`fa fa-star ${i < Math.round(props.rating) ? 'checked' : ''}`}
                        ></span>
                    ))}
                    <h6><span style={{ color: 'black' }}>{props.reviews}</span></h6>
                </button>

                <button className="deals">Limited time deal</button>

                <div className="price">
                    <h3>₹ {props.price}</h3>
                    <h5 className="original-price">M.R.P.:<span style={{ textDecoration: 'line-through' }}>₹{props.mrp}</span></h5>
                    <h4 className="discount">{props.discount}</h4>
                </div>

                <div className="offer">
                    <h4>Flat INR 2000 Off on HDFC Bank Cards</h4>
                </div>

                <img
                    className="prime"
                    src="/Amazon-Prime-Logo-PNG-HD-Quality.png"
                    alt="Prime Logo"
                />

                <div className="delivery">
                    <h5>{props.delivery}</h5>
                    <h5>Or fastest delivery Thu, 24 Jul</h5>
                </div>

                <div className="service">
                    <h5>Service: Device Setup</h5>
                </div>

                {/* Add to Cart */}
                {count === 0 ? (
                    <button className="buy" onClick={onAddToCart}>
                        Add to cart
                    </button>
                ) : (
                    <button className="buy" style={{ width: '115px' }}>
                        {count === 1 ? (
                            <span
                                onClick={handleRemove}
                                className="fa fa-trash"
                            ></span>
                        ) : (
                            <span
                                onClick={handleRemove}
                                className="fa fa-minus"
                            ></span>
                        )}

                        &nbsp;&nbsp;&nbsp;
                        <span className="count">{count}</span>&nbsp;&nbsp;&nbsp;
                        <span
                            onClick={handleAdd}
                            className="fa fa-plus add"
                        ></span>
                    </button>
                )}

                <div className="colors">
                    <div className="color-options">
                        <div className="color-option" style={{ backgroundColor: props.color1 }}></div>
                        <div className="color-option" style={{ backgroundColor: props.color2 }}></div>
                        <div className="color-option" style={{ backgroundColor: props.color3 }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Laptop;
