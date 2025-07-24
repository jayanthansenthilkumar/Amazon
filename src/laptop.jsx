import React from 'react';
import { useState } from 'react';
import './laptop.css';

function Laptop(props) {
    let [cart, setCart] = useState('Add to cart');
    let [count, setCount] = useState(1);
    function addtocart() {
        if (cart == 'Add to cart') {
            console.log('Added to cart');
            setCart('In cart');
        }
    }
    function add() {
        setCount(prev => prev + 1);
        console.log(count)
    }
    function remove() {
        if (count > 1) {
            setCount(prev => prev - 1);

        } else {
            setCart('Add to cart');
            setCount(1);
        }
    }

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
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <h6>{props.reviews}</h6>
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


                {cart === 'Add to cart' ? (
                    <button className="buy" onClick={addtocart}>
                        Add to cart
                    </button>
                ) : (
                    <button className="buy" style={{ width: '115px' }}>
                        {count === 1 ? (
                            <span onClick={remove} className="fa fa-trash"></span>
                        ) : (
                            <span onClick={remove} className="fa fa-minus"></span>
                        )}

                        &nbsp;&nbsp;&nbsp;
                        <span className="count">{count}</span>&nbsp;&nbsp;&nbsp;
                        <span onClick={add} className="fa fa-plus add"></span>
                    </button>
                )}


                <div className="colors">
                    <div className="color-options">
                        <div className="color-option" style={{ backgroundColor: props.color1  }}></div>
                        <div className="color-option" style={{ backgroundColor: props.color2 }}></div>
                        <div className="color-option" style={{ backgroundColor: props.color3 }}></div>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default Laptop;
