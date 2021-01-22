import React from 'react'
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import { useStateValue } from '../../context/StateProvider';
import CheckoutProduct from '../CartProducts/CheckoutProduct';
import FlipMove from 'react-flip-move';

function Checkout() {

    const [{ basket, user, profile }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout_left">
                {
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
                        alt=""
                        className="checkout_ad"
                    />
                }
                <h2>Hello! {!user ? 'Guest' : profile ? profile?.userName : user?.email}</h2>
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Cart is Empty</h2>
                        <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-png-image-download-pngm-2.png" width="200" alt="shopping cart png image download pngm" />
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout_title">Your Cart</h2>
                            <FlipMove appearAnimation="fade" enterAnimation="fade" leaveAnimation="fade">
                                {/* List all the checkout products */}
                                {basket?.map((item, index) => (
                                    <div key={index}>
                                        <CheckoutProduct
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            rating={item.rating}
                                            image={item.image}
                                        />
                                    </div>

                                ))}
                            </FlipMove>
                        </div>
                    )}
            </div>

            {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
            )}
        </div >
    )
}

export default Checkout
