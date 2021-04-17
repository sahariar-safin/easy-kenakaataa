import axios from 'axios';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [image, setImage] = useState({});
    const onSubmit = data => {
        const product = { ...data, ...image }
        fetch("https://blueberry-cobbler-09808.herokuapp.com/addProduct", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => console.log("added"))
    };

    const uploadImage = (event) => {
        document.getElementById('submitBtn').value = "Uploading..."
        document.getElementById('submitBtn').setAttribute("disabled", "")
        const imageData = new FormData();
        imageData.set('key', '5cc92beddf63f7dc55cb81cb7d04e498');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                const imgURL = response.data.data.display_url;
                setImage({ imgURL });
                document.getElementById('submitBtn').value = "Upload finis!";
                document.getElementById('submitBtn').removeAttribute("disabled");
                setTimeout(() => {
                    document.getElementById('submitBtn').value = "Save";
                }, 1000);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    console.log(image);
    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Product Name</label>
                    <input name="productName" defaultValue="" ref={register} />
                </div>

                <div>
                    <label>Author Name</label>
                    <input name="authorName" defaultValue="" ref={register} />
                </div>

                <div>
                    <label>Price</label>
                    <input name="price" defaultValue="" type="number" ref={register} />
                </div>

                <div>
                    <label>Upload Image</label>
                    <input name="image" type="file" onChange={uploadImage} />
                </div>
                <input type="submit" id="submitBtn" value="Save" />
            </form>
        </div>
    );
};

export default AddProduct;