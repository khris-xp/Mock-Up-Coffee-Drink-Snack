import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState'

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
        <div>
            <div className="overflow-x-auto relative my-[60px] shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Address
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Postal Code
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Country Code
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize">{orderDetails.address.recipient_name}</td>
                            <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize">{orderDetails.address.line1 + " - " + orderDetails.address.city}</td>
                            <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize">{orderDetails.address.postal_code}</td>
                            <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize">{orderDetails.address.country_code}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto relative my-[60px] shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                <span className="sr-only">Image</span>
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
        </div>
    )
}

export default OrderDetails