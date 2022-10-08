import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'

function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() => {
        if (params) {
            products.forEach(product => {
                if (product._id === params.id) setDetailProduct(product)
            })
        }
    }, [params, products])

    if (detailProduct.length === 0) return null;

    return (
        <>
            <div className="w-full flex justify-around flex-wrap p-[50px] text-[150%]">
                <img src={detailProduct.images.url} alt="" className="max-w-[400px] w-full m-[20px] h-[450px] object-cover block" />
                <div className="max-w-[500px] w-full m-[5px_20px]">
                    <div className="flex justify-between items-center">
                        <h2 className="uppercase text-[#0F3460] tracking-[2px] font-[2rem] font-bold font-tight">{detailProduct.title}</h2>
                        <h6 className="font-tight">#id: {detailProduct.product_id}</h6>
                    </div>
                    <span className="font-tight">{detailProduct.price} Baht</span>
                    <p className="font-tight leading-[1.5] m-[10px_0] opacity-[0.8]">{detailProduct.description}</p>
                    <p className="font-tight leading-[1.5] m-[10px_0] opacity-[0.8]">{detailProduct.content}</p>
                    <p className="font-tight leading-[1.5] m-[10px_0] opacity-[0.8]">Sold: {detailProduct.sold}</p>
                    <Link to="/cart" className="bg-[#333] text-white mt-[10px] p-[10px_25px] inline-block uppercase tracking-[2px]"
                        onClick={() => addCart(detailProduct)}>
                        Buy Now
                    </Link>
                </div>
            </div>

            <div>
                <h2 className="font-tight ml-[60px] text-lg">Related Products</h2>
                <div className='w-full grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] justify-items-center m-[20px_0] my-[10px]'>
                    {
                        products.map(product => {
                            return product.category === detailProduct.category
                                ? <ProductItem key={product._id} product={product} /> : null
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default DetailProduct
