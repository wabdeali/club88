import React from 'react'
import ProductPage from './ProductPage'

const ProductModal = (props) => {
    return (
        <div id="myModal" class="modal" style={{ display: 'block' }}>
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close" onClick={() => props.setselectedproduct(null)}>&times;</span>
                    <h2>Product Details</h2>
                </div>
                <div class="modal-body">
                    <ProductPage product={props.product} />
                </div>
            </div>
        </div>
    )
}

export default ProductModal
