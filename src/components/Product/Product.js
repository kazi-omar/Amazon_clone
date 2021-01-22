import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import { toast } from 'react-toastify';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarOutlineIcon from '@material-ui/icons/StarBorder';
import { useState, useStateValue } from '../../context/StateProvider';


function Product({ id, title, image, price, rating }) {
    const [state, dispatch] = useStateValue();

    let halfRating = (rating - Math.floor(rating)) * 10;
    let outline = 0;

    halfRating > 0 ? outline = (5 - Math.ceil(rating)) : outline = (5 - Math.floor(rating))

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
        toast.info(`${title} added worth \n  ৳${price}`);
        console.log("toast?")
    }

    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>৳.</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(Math.floor(rating))
                            .fill()
                            .map((_, index) => (
                                <StarIcon key={index} />
                            ))
                    }
                    {
                        (halfRating > 0) ? <StarHalfIcon /> : <></>
                    }
                    {
                        outline > 0 ? (
                            Array(outline)
                                .fill()
                                .map((_, index) => (
                                    <StarOutlineIcon key={index} />
                                ))
                        )
                            : ""
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
