import React from 'react'

const ProductThumbnail = (props) => {

    return (
        <div className="item-a">
            <div className="container">
                <img src={props.product.imgURLs[0]} alt="" className="image" />
                <div className="overlay">
                    <div className="text">
                        <h1>{props.product.title}</h1>
                        <button id="myBtn" className="book" onClick={() => props.setselectedproduct(props.product)}>View More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductThumbnail
