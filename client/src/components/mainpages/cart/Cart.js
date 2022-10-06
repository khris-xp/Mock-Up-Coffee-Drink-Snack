import React, { useContext, useState, useEffect } from 'react'
import { GlobalState } from '../../../GlobalState'
import axios from 'axios'
import PaypalButton from './PaypalButton'

function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const getTotal = () => {
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            }, 0)

            setTotal(total)
        }

        getTotal()

    }, [cart])

    const addToCart = async (cart) => {
        await axios.patch('/user/addcart', { cart }, {
            headers: { Authorization: token }
        })
    }

    const increment = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const removeProduct = id => {
        if (window.confirm("Do you want to delete this product?")) {
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }

    const tranSuccess = async (payment) => {
        const { paymentID, address } = payment;

        await axios.post('/api/payment', { cart, paymentID, address }, {
            headers: { Authorization: token }
        })

        setCart([])
        addToCart([])
        alert("You have successfully placed an order.")
    }


    if (cart.length === 0)
        return <h2 style={{ fontFamily: "Inter Tight", marginTop: "40px", textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>

    return (
        <div>
            {
                cart.map(product => (
                    <div className="w-full flex justify-around flex-wrap p-[50px] text-[150%] relative border-[1px] border-[solid] border-[#ccc] mt-[60px]" key={product._id}>
                        <img src={product.images.url} alt="" className="max-w-[400px] w-full m-[20px] h-[450px] object-cover block" />

                        <div className="max-w-[500px] w-full m-[5px_20px]">
                            <h2 className="uppercase text-[#0078AA] tracking-[2px] font-[2rem] font-extrabold font-tight">{product.title}</h2>

                            <h3 className="mt-[10px] text-[#D2001A] font-tight">{product.price * product.quantity} Baht</h3>
                            <p className="leading-[1.5] m-[10px_0] opacity-80 font-tight">{product.description}</p>
                            <p className="leading-[1.5] m-[10px_0] opacity-80 font-tight">{product.content}</p>

                            <div >
                                <button onClick={() => decrement(product._id)} className="w-[40px] h-[40px] border-[1px] border-solid border-[#ccc]"> - </button>
                                <span className="text-[#D2001A] p-[0_20px]">{product.quantity}</span>
                                <button onClick={() => increment(product._id)} className="w-[40px] h-[40px] border-[1px] border-solid border-[#ccc]"> + </button>
                            </div>

                            <div className="absolute top-0 right-[5px] text-[#D2001A] font-black cursor-pointer"
                                onClick={() => removeProduct(product._id)}>
                                X
                            </div>
                        </div>
                    </div>
                ))
            }

            <div className="w-full h-[50px] flex items-center justify-between">
                <h3 className="text-[#D2001A] font-bold font-tight">Total: {total} Baht</h3>
                <PaypalButton
                    total={total}
                    tranSuccess={tranSuccess} />
            </div>
        </div>
    )
}

export default Cart