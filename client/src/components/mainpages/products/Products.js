import React, { useContext, useState } from 'react'
import { GlobalState } from '../../../GlobalState'
import ProductItem from '../utlis/productItem/ProductItem'
import axios from 'axios'
import Filters from './Filters'
import LoadMore from './LoadMore'

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
            <Filters />
            {
                isAdmin &&
                <div className="text-right m-[20px]">
                    <span className="uppercase text-slate-600 tracking-[1.3px] font-tight">Select All</span>
                    <input type="checkbox" checked={isCheck} onChange={checkAll} className="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-[0_15px]" />
                    <button onClick={deleteAll} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 font-tight m-[20px]">Delete All</button>
                </div>
            }
            <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] justify-items-center m-[20px_0] my-[10px]">
                {
                    products.map(product => {
                        return <ProductItem key={product._id} product={product} setProducts={setProducts}
                            isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                    })
                }
            </div>
            <LoadMore />
        </>
    )
}

export default Products
