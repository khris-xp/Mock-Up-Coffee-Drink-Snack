import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState'

function BtnRender({ product, deleteProduct }) {

    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart

    return (
        <div className="w-full my-[10px] flex justify-between">
            {
                isAdmin ?
                    <>
                        <Link to="#!" className="w-[50%] text-center uppercase text-white tracking-[2px] mr-[5px] inline-block px-6 py-2.5 bg-red-600 font-medium text-sm leading-tight rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                            onClick={() => deleteProduct(product._id, product.images.public_id)}>
                            Delete
                        </Link>
                        <Link to={`/edit_product/${product._id}`} className="w-[50%] text-center uppercase text-white tracking-[2px] ml-[5px] inline-block px-6 py-2.5 bg-blue-600 font-medium text-sm leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                            Edit
                        </Link>
                    </>
                    : <>
                        <Link to="/shop" onClick={() => addCart(product)} className="w-[50%] text-center uppercase text-white tracking-[2px] mr-[5px] inline-block px-6 py-2.5 bg-green-600 font-medium text-sm leading-tight rounded-full shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
                            Buy
                        </Link>
                        <Link to={`/detail/${product._id}`} className="w-[50%] text-center uppercase text-white tracking-[2px] ml-[5px] inline-block px-6 py-2.5 bg-blue-600 font-medium text-sm leading-tight rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                            View
                        </Link>
                    </>
            }

        </div>
    )
}

export default BtnRender