import React from 'react'
import ProductsHero from './Products/ProductsHero'
import Navbar from './Reusable/Navbar'
import '@google/model-viewer'

function Products() {

    //const link = "https://firebasestorage.googleapis.com/v0/b/club-app-9bbc5.appspot.com/o/CHAHIN_BOTTLE_OF_SODA.gltf?alt=media&token=f749db02-c760-40d4-aee3-0ae6e60a2d18"
    const link = './threedee/CHAHIN_BOTTLE_OF_SODA.gltf'
    return (
        <>
            <Navbar logout={true} />
            <div style={{
                textAlign: 'center',
            }}>
                <ProductsHero />
            </div>
            <div>
                <model-viewer src={link}
                    camera-controls>

                </model-viewer>
            </div>
        </>
    )
}

export default Products
