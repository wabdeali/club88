import React from 'react'

const ProductPage = ({ product }) => {
    return (
        <div id="wrap">
            <div id="product_layout_3">
                <div class="product_image">
                    <div class="main_image">
                        <model-viewer class='a' src={product.modelURL}
                            camera-controls
                            background-color="yellow"
                            stage-light-intensity="3" environment-intensity="2"
                            ar ar-modes="scene-viewer webxr" ar-scale="50%"
                            camera-orbit="0deg 90deg 100m"
                            alt="A 3D model of an astronaut">
                        </model-viewer>
                    </div>
                </div>
                <div class="product_desc">
                    <h1>{product.title}</h1>
                    <span class="price">{`$${product.old_price}`}</span>
                    <span class="sale_price">{`$${product.new_price}`}</span>
                    <span class="stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i></span>

                    <div class="buying">
                        <div class="quantity">
                            <label for="quantity">QTY:</label>
                            <input type="text" />
                        </div>
                        <div class="cart">
                            <a href="_blank" class="add">Add to Cart <i class="fa fa-shopping-cart fa-lg"></i></a>
                        </div>
                    </div>
                    <div class="other_options">
                        <span class="SKU">{product.model_number}</span>
                        <span class="QTY">{`QTY: ${product.quantity}`}</span>
                    </div>
                    <div class="description">
                        <h4>{product.description}</h4>
                        <p>{product.body}</p>
                    </div>
                </div>
                <div class="tabular">
                    <ul class="tabs group">
                        <li><a href="#/one">Images</a></li>
                        <li><a href="#/two">Reviews</a></li>
                    </ul>
                    <div id="content">
                        <aside id="one" >
                            {product.imgURLs.map(img => <img src={img} alt="" />)}
                        </aside>
                        <aside id="two">
                            {product.reviews.map(review => <div>
                                <span class="author">{review.name}</span>
                                <p>{review.review}</p>
                            </div>
                            )}
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
