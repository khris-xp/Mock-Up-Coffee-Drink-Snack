import React from 'react'
import BtnRender from './BtnRender'


function ProductItem({ product, isAdmin, deleteProduct, handleCheck }) {

    return (
        <div className="max-w-[300px] overflow-hidden h-[500px] p-[15px] shadow-[0_0_15px_#ddd] m-[20px_0] relative rounded">

            {
                isAdmin && <input type="checkbox" checked={product.checked}
                    onChange={() => handleCheck(product._id)} className="absolute w-[25px] h-[25px]"/>
            }

            <img src={product.images.url} alt="" className="w-full h-[300px] block object-cover rounded"/>

            <div>
                <h2 title={product.title} className="mt-[10px] text-xl w-full text-ellipsis overflow-hidden whitespace-nowrap capitalize cursor-pointer text-[#323232] font-tight">{product.title}</h2>
                <span className="text-[#D2001A] font-tight text-base">{product.price} Baht</span>
                <p className="w-full h-[70px] overflow-hidden text-[#323232] font-tight">{product.description}</p>
            </div>

            <BtnRender product={product} deleteProduct={deleteProduct} />
        </div>
    )
}

export default ProductItem
