import React, { useState, useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import axios from 'axios';

function Categories() {
    const state = useContext(GlobalState);
    const [categories] = state.categoriesAPI.categories
    const [category, setCategory] = useState('')
    const [token] = state.token
    const [callback, setCallback] = state.categoriesAPI.callback
    const [onEdit, setOnEdit] = useState(false);
    const [id, setID] = useState('')

    const createCategory = async e => {
        e.preventDefault()
        try {
            if (onEdit) {
                const res = await axios.put(`/api/category/${id}`, { name: category }, {
                    headers: { Authorization: token }
                })
                alert(res.data.msg);
            } else {
                const res = await axios.post('/api/category', { name: category }, {
                    headers: { Authorization: token }
                })

                setCategory('')
                setCallback(!callback)
                alert(res.data.msg);
            }
            setOnEdit(false)
            setCategory('');
            setCallback(!callback);
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const editCategory = async (id, name) => {
        setID(id)
        setCategory(name)
        setOnEdit(true)
    }

    const deleteCategory = async id => {
        try {
            const res = await axios.delete(`/api/category/${id}`, {
                headers: { Authorization: token }
            })
            alert(res.data.msg);
            setCallback(!callback);
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="max-w-[700px] flex flex-wrap justify-around m-[30px_auto] mt-[100px]">
            <form onSubmit={createCategory} className="w-[290px] mb-[20px]">
                <label htmlFor='category' className="block font-bold tracking-[2px] uppercase mb-[10px] font-tight">Category</label>
                <input type="text" name="category" value={category} required
                    onChange={e => setCategory(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-tight"/>

                <button type="submit" className="h-[35px] border-none outline-none border-[1px_solid_#555] w-[70px] bg-[#555] text-white mt-[20px] font-tight rounded-xl">{onEdit ? "Update" : "Create"}</button>
            </form>

            <div className="col">
                {
                    categories.map(category => (
                        <div className="min-w-[290px] flex justify-between items-center p-[10px] mb-[10px] border-[1px_solid_#ccc]" key={category._id}>
                            <p className="font-tight font-bold">{category.name}</p>
                            <div>
                                <button onClick={() => editCategory(category._id, category.name)} className="h-[35px] border-none outline-none border-b-[1px_solid_#555] w-[70px] bg-[#555] text-white ml-[10px] font-tight rounded-xl">Edit</button>
                                <button onClick={() => deleteCategory(category._id, category.name)} className="h-[35px] border-none outline-none border-b-[1px_solid_#555] w-[70px] bg-[#555] text-white ml-[10px] font-tight rounded-xl">Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories
