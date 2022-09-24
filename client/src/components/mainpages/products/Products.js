import React, { useContext, useState } from 'react'
import { GlobalState } from '../../../GlobalState'
import ProductItem from '../utlis/productItem/ProductItem'
import axios from 'axios'

function Products() {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.productsAPI.callback
    const [isCheck, setIsCheck] = useState(false)

    const handleCheck = (id) => {
        products.forEach(product => {
            if (product._id === id) product.checked = !product.checked
        })
        setProducts([...products])
    }

    const deleteProduct = async (id, public_id) => {
        console.log({ id, public_id })
        try {
            const deleteImg = await axios.post('/api/delete', { public_id }, {
                headers: { Authorization: token }
            })
            const deleteProduct = await axios.delete(`/api/products/${id}`, {
                headers: { Authorization: token }
            })

            await deleteImg
            await deleteProduct
            setCallback(!callback)

        } catch (err) {
            alert(err.response.data.msg);
        }
    }

    const checkAll = () => {
        products.forEach(product => {
            product.checked = !isCheck
        })
        setProducts([...products])
        setIsCheck(!isCheck)
    }

    const deleteAll = () => {
        products.forEach(product => {
            if (product.checked) deleteProduct(product._id, product.images.public_id)
        })
    }

    return (
        <>
            {
                isAdmin &&
                <div className="delete-all">
                    <span>Select All</span>
                    <input type="checkbox" checked={isCheck} onChange={checkAll} />
                    <button onClick={deleteAll}>Delete All</button>
                </div>
            }
            <div className='products'>
                {
                    products.map(product => {
                        return <ProductItem key={product._id} product={product} setProducts={setProducts}
                            isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                    })
                }
            </div>
        </>
    )
}

export default Products
