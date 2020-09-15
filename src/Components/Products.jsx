import React, { useEffect, useState } from 'react'
import ProductsHero from './Products/ProductsHero'
import Navbar from './Reusable/Navbar'
import { db } from '../config/firebase'

import './Products/product.css'
import './Products/popup.css'
import './Products/productcard.css'
import './Products/style.css'

import ProductThumbnail from './Products/ProductThumbnail'
import ProductModal from './Products/ProductModal'


function Products() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)

    useEffect(() => {

        db.collection('products').get()
            .then(snapshot => {

                let tempData = snapshot.docs.map(doc => doc.data())
                setData(tempData)
                console.log(tempData)
                setLoading(false)

            })
    }, [])

    return (
        <>
            <Navbar logout={true} />
            <ProductsHero />
            <div className="products">
                <div className="grid">
                    {
                        !loading && data.map(product => <ProductThumbnail product={product} setselectedproduct={setSelectedProduct} />)
                    }
                </div>
            </div>
            {selectedProduct && <ProductModal product={selectedProduct} setselectedproduct={setSelectedProduct} />}
        </>
    )
}

export default Products
