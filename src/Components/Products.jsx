import React from 'react'
import { authentication } from '../config/firebase'

function Products() {
    return (
        <div style={{
            textAlign: 'center',
        }}>
            <h1>Products</h1>
            <button onClick={() => authentication.signOut()}>Sign Out</button>
        </div>
    )
}

export default Products
