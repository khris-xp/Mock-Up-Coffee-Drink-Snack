import React, { useContext, useEffect } from 'react'
import { GlobalState } from '../../../GlobalState'
import { Link } from 'react-router-dom'
import axios from 'axios'

function OrderHistory() {
    const state = useContext(GlobalState)
    const [history, setHistory] = state.userAPI.history
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token

    useEffect(() => {
        if (token) {
            const getHistory = async () => {

                if (isAdmin) {
                    const res = await axios.get('/api/payment', {
                        headers: { Authorization: token }
                    })
                    setHistory(res.data)
                } else {
                    const res = await axios.get('/user/history', {
                        headers: { Authorization: token }
                    })
                    setHistory(res.data)
                }
            }
            getHistory()
        }
    }, [token, isAdmin, setHistory])

    return (
        <div className="overflow-x-auto relative my-[60px] shadow-md sm:rounded-lg">

            <h4 className="font-tight text-center m-[20px] uppercase tracking-[1.2px]">You have {history.length} ordered</h4>

            <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 m-auto w-full">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Payment ID
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Date of Purchased
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        history.map(items => (
                            <tr keys={items._id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {items.paymentID}
                                </th>
                                <td className="px-4 px-6 border-[1px_solid_#ddd] border-collapse text-center p-[10px] capitalize">
                                    {new Date(items.createdAt).toLocaleDateString()}
                                </td>
                                <td className="px-4 px-6 border-[1px_solid_#ddd] border-collapse text-center p-[10px] capitalize">
                                    <Link to={`/history/${items._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default OrderHistory