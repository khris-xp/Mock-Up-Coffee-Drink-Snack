import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState'
import { Link } from 'react-router-dom'

function OrderDetails() {
    const state = useContext(GlobalState)
    const [history] = state.userAPI.history
    const [orderDetails, setOrderDetails] = useState([])

    const params = useParams()

    useEffect(() => {
        if (params.id) {
            history.forEach(item => {
                if (item._id === params.id) setOrderDetails(item);
            })
        }
    }, [params.id, history])

    if (orderDetails.length === 0) return null;

    return (

        <div className="overflow-x-auto relative my-[60px] shadow-md sm:rounded-lg">

<h4 className="font-tight text-center m-[20px] uppercase tracking-[1.2px]">You have {history.length} ordered</h4>

            <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            <span class="sr-only">Image</span>
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Products
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Quantity
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orderDetails.cart.map(item => (
                            <tr keys={item._id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <td className="p-4 w-32">
                                    <img src={item.images.url} alt="" />
                                </td>
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize">
                                    {item.title}
                                </td>
                                <td className="px-4 px-6 border-[1px_solid_#ddd] border-collapse text-center p-[10px] capitalize">
                                    {item.quantity}
                                </td>
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize">
                                    {item.price * item.quantity} Baht
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

    // <div className="overflow-x-auto">
    //     <table className="m-[auto] w-full border-[1px] border-[solid] border-[#ddd] border-collapse">
    //         <thead>
    //             <tr className="border-[1px] border-[solid] border-[#ddd] border-collapse text-center p-[10px] capitalize">
    //                 <th className="border-[1px] border-[solid] border-[#ddd] border-collapse text-center p-[10px] capitalize">Name</th>
    //                 <th className="border-[1px] border-[solid] border-[#ddd] border-collapse text-center p-[10px] capitalize">Address</th>
    //                 <th className="border-[1px] border-[solid] border-[#ddd] border-collapse text-center p-[10px] capitalize">Postal Code</th>
    //                 <th className="border-[1px] border-[solid] border-[#ddd] border-collapse text-center p-[10px] capitalize">Country Code</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             <tr>
    //                 <td className="border-[1px] border-[solid] border-[#ddd] border-collapse text-center p-[10px] capitalize">{orderDetails.address.recipient_name}</td>
    //                 <td className="border-[1px] border-[solid] border-[#ddd] border-collapse text-center p-[10px] capitalize">{orderDetails.address.line1 + " - " + orderDetails.address.city}</td>
    //                 <td className="border-[1px] border-[solid] border-[#ddd] border-collapse text-center p-[10px] capitalize">{orderDetails.address.postal_code}</td>
    //                 <td className="border-[1px] border-[solid] border-[#ddd] border-collapse text-center p-[10px] capitalize">{orderDetails.address.country_code}</td>
    //             </tr>
    //         </tbody>
    //     </table>

    //     <table className="m-[auto] w-full border-[1px] border-[solid] border-[#ddd] border-collapse">
    //         <thead>
    //             <tr className="border-[1px] border-[solid] border-[#ddd] border-collapse">
    //                 <th className="border-[1px] border-[solid] border-[#ddd] border-collapse text-center p-[10px] capitalize"></th>
    //                 <th className="border-[1px] border-[solid] border-[#ddd] border-collapse text-center p-[10px] capitalize">Products</th>
    //                 <th className="border-[1px] border-[solid] border-[#ddd] border-collapse text-center p-[10px] capitalize">Quantity</th>
    //                 <th className="border-[1px] border-[solid] border-[#ddd] border-collapse text-center p-[10px] capitalize">Price</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {
    //                 orderDetails.cart.map(item => (
    //                     <tr key={item._id} className="border-[1px] border-[solid] border-[#ddd] border-collapse">
    //                         <td className="border-[1px] border-[solid] border-[#ddd] border-collapse p-[10px] object-center"><img src={item.images.url} alt="" className="w-[70px] h-[100px] object-cover" /></td>
    //                         <td className="border-[1px] border-[solid] border-[#ddd] border-collapse text-center p-[10px] capitalize">{item.title}</td>
    //                         <td className="border-[1px] border-[solid] border-[#ddd] border-collapse text-center p-[10px] capitalize">{item.quantity}</td>
    //                         <td className="border-[1px] border-[solid] border-[#ddd] border-collapse text-center p-[10px] capitalize">{item.price * item.quantity} Bath</td>
    //                     </tr>
    //                 ))
    //             }
    //         </tbody>
    //     </table>
    // </div>
}

export default OrderDetails