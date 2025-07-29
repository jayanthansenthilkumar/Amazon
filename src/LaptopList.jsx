import React, { useEffect, useState } from 'react';
import Laptop from './laptop';

const LaptopList = () => {
    const [laptops, setLaptops] = useState([]);
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        const fetchLaptops = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setLaptops(data);
        };
        fetchLaptops();
    }, []);

    const handleAddToCart = (id) => {
        setCartItems((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 1,
        }));
    };

    const handleUpdateCount = (id, newCount) => {
        setCartItems((prev) => {
            if (newCount <= 0) {
                const updated = { ...prev };
                delete updated[id];
                return updated;
            }
            return {
                ...prev,
                [id]: newCount,
            };
        });
    };

    const itemsInCart = laptops.filter((l) => cartItems[l.id] > 0);

    return (
        <>
            <div className="laptop-list">
                {laptops.map((laptop) => (
                    <Laptop
                        key={laptop.id}
                        img={laptop.image}
                        price={(laptop.price * 80).toFixed(2)}
                        mrp={(laptop.price * 1.8).toFixed(2)}
                        discount={Math.round((1 - laptop.price / (laptop.price * 1.8)) * 100) + '% off'}
                        color1="grey"
                        color2="black"
                        color3="silver"
                        delivery={`FREE delivery 2-5 days`}
                        reviews={laptop.rating.count}
                        title={laptop.title}
                        rating={laptop.rating.rate}
                        count={cartItems[laptop.id] || 0}
                        onAddToCart={() => handleAddToCart(laptop.id)}
                        onUpdateCount={(newCount) =>
                            handleUpdateCount(laptop.id, newCount)
                        }
                    />
                ))}
            </div>
            <div className="cartitems">
                <h4>Subtotal</h4>
                <h3>
                    ₹
                    {itemsInCart
                        .reduce(
                            (total, item) =>
                                total +
                                parseFloat(item.price * 80) *
                                    cartItems[item.id],
                            0
                        )
                        .toFixed(2)}
                </h3>
                <h4>Your order is eligible for FREE Delivery. Select this option at checkout.<a href="/">Details</a></h4>
                <button>Go to Cart</button>
                <div className="lapimg">
                    {itemsInCart.map((laptop) => (
                        <img
                            className="cartitemimg"
                            key={laptop.id}
                            src={laptop.image}
                            alt="Laptop"
                        />
                    ))}
                </div>
            </div>
        </>
    );

}

export default LaptopList;