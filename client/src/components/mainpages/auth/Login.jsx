import React, { useState } from 'react'
import axios from 'axios'

function Login() {
    const [user, setUser] = useState({
        email: '', password: ''
    })

    const [formErrors, setFormErrors] = useState({});

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const loginSubmit = async e => {
        e.preventDefault()
        setFormErrors(validate(user));
        try {
            await axios.post('/user/login', { ...user })
            localStorage.setItem('firstLogin', true);
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };

    return (
        <div>
            <div className="text-center mt-24">
                <div className="flex items-center justify-center">
                    <svg fill="none" viewBox="0 0 24 24" class="w-12 h-12 text-blue-500" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <h2 className="text-4xl tracking-tight">
                    Sign into your account
                </h2>
                <span className="text-sm">or <a href="/register" class="text-blue-500">
                    register a new account
                </a>
                </span>
            </div>
            <div className="flex justify-center my-2 mx-4 md:mx-0">
                <form className="w-full max-w-xl bg-white rounded-lg shadow-md p-6" onSubmit={loginSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-3">
                        <div className="w-full md:w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password' >Email address</label>
                            <input placeholder="Email" type="text" name="email" value={user.email} onChange={onChangeInput}
                                className="text-md block px-3 py-2  rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"></input>
                        </div>
                        <p className="font-tight mb-[20px] ml-[20px] text-red-600 font-semibold">{formErrors.email}</p>

                        <div className="w-full md:w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Password</label>
                            <input placeholder="Password" type="password" name="password" value={user.password} onChange={onChangeInput} autoComplete='on'
                                className="text-md block px-3 py-2  rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"></input>
                        </div>
                        <p className="font-tight mb-[20px] ml-[20px] text-red-600 font-semibold">{formErrors.password}</p>
                        <div className="w-full md:w-full pt-3 px-3">
                            <button className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500 p-[8px]">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
