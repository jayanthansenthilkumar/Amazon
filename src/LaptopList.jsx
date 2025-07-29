import React, { useEffect, useState } from 'react';
import Laptop from './laptop';
import { useNavigate } from 'react-router-dom';

const LaptopList = () => {
    const [laptops, setLaptops] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                setLaptops(data);
            } catch (error) {
                console.error('Error fetching laptops:', error);
            }
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
        <div style={{ paddingBottom: '100px' }}>
            <div className="laptop-list">
                {laptops.map((laptop) => (
                    <Laptop
                        key={laptop.id}
                        img={laptop.image}
                        price={(laptop.price * 80).toFixed(2)}
                        mrp={(laptop.price * 1.8 * 80).toFixed(2)}
                        discount={`${Math.round(
                            (1 - laptop.price / (laptop.price * 1.8)) * 100
                        )}% off`}
                        color1="grey"
                        color2="black"
                        color3="silver"
                        delivery="FREE delivery 2-5 days"
                        reviews={laptop.rating?.count || 0}
                        title={laptop.title}
                        rating={laptop.rating?.rate || 0}
                        count={cartItems[laptop.id] || 0}
                        onAddToCart={() => handleAddToCart(laptop.id)}
                        onUpdateCount={(newCount) => handleUpdateCount(laptop.id, newCount)}
                    />
                ))}
            </div>

            {itemsInCart.length > 0 && (
                <div className="cartitems">
                    <h4>Subtotal</h4>
                    <h3>
                        ₹
                        {itemsInCart
                            .reduce(
                                (total, item) =>
                                    total +
                                    (item.price * 80) * (cartItems[item.id] || 0),
                                0
                            )
                            .toFixed(2)}
                    </h3>
                    <h4>
                        Your order is eligible for FREE Delivery. <a href="/">Details</a>
                    </h4>
                    <button onClick={() => navigate('/cart')}>Go to Cart</button>
                    <div className="lapimg">
                        {itemsInCart.map((laptop) => (
                            <img
                                className="cartitemimg"
                                key={laptop.id}
                                src={laptop.image}
                                alt={laptop.title}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LaptopList;