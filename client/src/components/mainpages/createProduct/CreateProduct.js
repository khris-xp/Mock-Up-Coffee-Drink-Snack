import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { GlobalState } from '../../../GlobalState'
import { useNavigate, useParams } from 'react-router-dom'

const initialState = {
    product_id: '',
    title: '',
    price: 0,
    description: 'Ice Coffee',
    content: 'Best Coffee',
    category: '',
    _id: ''
}

function CreateProduct() {
    const state = useContext(GlobalState)
    const [product, setProduct] = useState(initialState)
    const [categories] = state.categoriesAPI.categories
    const [images, setImages] = useState(false)

    const [token] = state.token
    const [isAdmin] = state.userAPI.isAdmin

    const navigate = useNavigate()
    const param = useParams()

    const [products] = state.productsAPI.products
    const [onEdit, setOnEdit] = useState(false);
    const [callback, setCallback] = state.productsAPI.callback

    useEffect(() => {
        if (param.id) {
            setOnEdit(true)
            products.forEach(product => {
                if (product._id === param.id) {
                    setProduct(product)
                    setImages(product.images)
                }
            })
        } else {
            setOnEdit(false)
            setProduct(initialState)
            setImages(false)
        }
    }, [param.id, products])

    const handleUpload = async e => {
        e.preventDefault()
        try {
            if (!isAdmin) return alert("You're not an admin")
            const file = e.target.files[0]

            if (!file) return alert("File not exist.")

            if (file.size > 1024 * 1024) // 1mb
                return alert("Size too large!")

            if (file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
                return alert("File format is incorrect.")

            let formData = new FormData();
            formData.append('file', file);

            const res = await axios.post('/api/upload', formData, {
                headers: { 'content-type': 'multipart/form-data', Authorization: token }
            })
            setImages(res.data)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }


    const handleDelete = async e => {
        try {
            if (!isAdmin) return alert("You're not Admin");
            await axios.post('/api/delete', { public_id: images.public_id }, {
                headers: { Authorization: token }
            })

            setImages(false);
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if (!isAdmin) return alert("You're not an admin");

            if (!images) return alert("No Image Upload");

            if (onEdit) {
                await axios.put(`/api/products/${product._id}`, { ...product, images }, {
                    headers: { Authorization: token }
                })
            } else {
                await axios.post('/api/products', { ...product, images }, {
                    headers: { Authorization: token }
                })
            }
            setCallback(!callback)
            setImages(false)
            setProduct(initialState)
            navigate("/")
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const styleUpload = {
        display: images ? "block" : "none"
    }

    const handleChangeInput = e => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value })
    }

    return (
        <div className="w-full flex flex-wrap items-center justify-around mt-[40px]">
            <div className="max-w-md h-[500px] w-full border-[1px] border-[solid] border-[#ddd] p-[15px] m-[20px] relative">
                
                <input type="file" name="file" onChange={handleUpload} className="relative w-full h-full outline-none 
                before:content-['+'] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-white before:text-[#FFD372] before:text-[17rem] before:text-center
                before:cursor-pointer before:m-[auto]"/>

                <div className="w-full h-full absolute top-0 left-0 bg-white" style={styleUpload}>
                    <img src={images ? images.url : ''} alt="" className="w-full h-full block object-cover" />
                    <span onClick={handleDelete} className="absolute top-[-13px] right-[-13px] bg-white border-[1px] border-[solid] border-[#ddd]
                    rounded-[50%] p-[6px_10px] cursor-pointer font-black text-[#D2001A]
                    ">X</span>
                </div>
            
            </div>

            <form onSubmit={handleSubmit} className="max-w-[500px] min-w-[290px] w-full m-[15px_30px]">
                <div className="w-full m-[15px_0]">
                    <label htmlFor='product_id' className="font-tight">Product ID</label>
                    <input type="text" name="product_id" id="product_id" required
                        value={product.product_id} onChange={handleChangeInput} disabled={product._id} 
                        className="w-full min-h-[40px] p-[0_5px] mt-[5px] font-tight"/>
                </div>

                <div className="w-full m-[15px_0]">
                    <label htmlFor='title' className="font-tight">Title</label>
                    <input type="text" name="title" id="title" required
                        value={product.title} onChange={handleChangeInput} 
                        className="w-full min-h-[40px] p-[0_5px] mt-[5px] font-tight"/>
                </div>

                <div className="w-full m-[15px_0]">
                    <label htmlFor='price' className="font-tight">Price</label>
                    <input type="text" name="price" id="price" required
                        value={product.price} onChange={handleChangeInput} 
                        className="w-full min-h-[40px] p-[0_5px] mt-[5px] font-tight"/>
                </div>

                <div className="w-full m-[15px_0]">
                    <label htmlFor='description' className="font-tight">Description</label>
                    <textarea type="text" name="description" id="description" required
                        value={product.description} rows="5" onChange={handleChangeInput} 
                        className="w-full min-h-[40px] p-[0_5px] mt-[5px] font-tight border-[1px] border-[solid] border-[#555] rounded" />
                </div>

                <div className="w-full m-[15px_0]">
                    <label htmlFor='content' className="font-tight">Content</label>
                    <textarea type="text" name="content" id="content" required
                        value={product.content} rows="7" onChange={handleChangeInput} 
                        className="w-full min-h-[40px] p-[0_5px] mt-[5px] font-tight border-[1px] border-[solid] border-[#555] rounded" />
                </div>

                <div className="w-full m-[15px_0]">
                    <label htmlFor='categories' className="font-tight">Categories: </label>
                    <select name="category" value={product.category} onChange={handleChangeInput}>
                        <option value="" >Please select a category</option>
                        {
                            categories.map(category => (
                                <option value={category._id} key={category._id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <button type="submit" className="w-[200px] h-[40px] bg-[#555] text-white uppercase tracking-[2px] font-bold mb-[20px]">{onEdit ? "Update" : "Create"}</button>

            </form>
        </div>
    )
}

export default CreateProduct
