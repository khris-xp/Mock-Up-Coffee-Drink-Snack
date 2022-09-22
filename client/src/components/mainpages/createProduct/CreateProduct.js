import React, { useState, useContext } from 'react'
import axios from 'axios'
import { GlobalState } from '../../../GlobalState'

const initialState = {
    product_id: '',
    title: '',
    price: 0,
    description: 'Ice Coffee',
    content: 'Best Coffee',
    category: ''
}

function CreateProduct() {
    const state = useContext(GlobalState)
    const [product, setProduct] = useState(initialState)
    const [categories] = state.categoriesAPI.categories
    const [images, setImages] = useState(false)
    const [token] = state.token
    const [isAdmin] = state.userAPI.isAdmin

    const handleUpload = async e => {
        e.preventDefault()
        try {
            if (!isAdmin) return alert("You're not Admin");

            const file = e.target.files[0]

            if (!file) return alert("File not exist.");

            if (file.size > 1024 * 1024)
                return alert("Size Too Large!!");

            if (file.type !== "image/jpeg" && file.type !== "image/png")
                return alert("File Format is incorrect!!");

            let formData = new FormData();
            formData.append('file', file);

            const res = await axios.post('/api/upload', formData, {
                headers: { 'content-type': 'multipart/form-data', Authorization: token }
            })

            setImages(res.data);

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

    const styleUpload = {
        display: images ? "block" : "none"
    }

    const handleChaneInput = e => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value })
    }

    return (
        <div className="create_product">
            <div className="upload">
                <input type="file" name="file" id="file_up" onChange={handleUpload} />
                <div id="file_img" style={styleUpload}>
                    <img src={images ? images.url : ''} alt="" />
                    <span onClick={handleDelete}>X</span>
                </div>
            </div>

            <form>
                <div className="row">
                    <label htmlFor='product_id'>Product ID</label>
                    <input type="text" name="product_id" id="product_id" required
                        value={product.product_id} onChange={handleChaneInput} />
                </div>

                <div className="row">
                    <label htmlFor='title'>Title</label>
                    <input type="text" name="title" id="title" required
                        value={product.title} onChange={handleChaneInput} />
                </div>

                <div className="row">
                    <label htmlFor='price'>Price</label>
                    <input type="text" name="price" id="price" required
                        value={product.price} onChange={handleChaneInput} />
                </div>

                <div className="row">
                    <label htmlFor='description'>Description</label>
                    <textarea type="text" name="description" id="description" required
                        value={product.description} rows="5" onChange={handleChaneInput} />
                </div>

                <div className="row">
                    <label htmlFor='content'>Content</label>
                    <textarea type="text" name="content" id="content" required
                        value={product.content} rows="7" onChange={handleChaneInput} />
                </div>

                <div className="row">
                    <label htmlFor='categories'>Categories: </label>
                    <select name="category" value={product.category} onChange={handleChaneInput}>
                        <option value="">Please select a category</option>
                        {
                            categories.map(category => (
                                <option value={category._id} key={category._id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <button type="submit">Create</button>

            </form>
        </div>
    )
}

export default CreateProduct
