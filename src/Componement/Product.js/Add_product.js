 
import React, { useState } from "react";
import axios from "axios";

function Add_product() {

    const [input, setInput] = useState({
        name: "",
        price: "",
        category: "",
        brand: "",
        company: "",
        detail: "",
        status: "1",
        sale: 0
    });

    const [avatar, setAvatar] = useState([]);

    const accessToken = localStorage.getItem("token");

    const config = {
        headers: {
            Authorization: "Bearer " + accessToken,
            Accept: "application/json"
        }
    };


     
    const handleImage = (e) => {

        const files = Array.from(e.target.files);

        if (files.length > 3) {
            alert("Tối đa 3 hình");
            return;
        }

        for (let file of files) {

            if (!file.type.startsWith("image/")) {
                alert(file.name + " không phải là hình ảnh");
                return;
            }

            if (file.size >= 1024 * 1024) {
                alert(file.name + " phải nhỏ hơn 1MB");
                return;
            }
        }

        setAvatar(files);
    };


    
    const handleSubmit = (e) => {

        e.preventDefault();

         if (input.name.trim() === "") {
            alert("Vui lòng nhập tên sản phẩm");
            return;
        }

        if (input.name.trim().length < 5) {
            alert("Tên sản phẩm phải có ít nhất 5 ký tự");
            return;
        }

         if (input.price === "") {
            alert("Vui lòng nhập giá");
            return;
        }

         if (input.category === "") {
            alert("Vui lòng chọn category");
            return;
        }

         if (input.brand === "") {
            alert("Vui lòng chọn brand");
            return;
        }

         if (avatar.length === 0) {
            alert("Vui lòng chọn hình ảnh");
            return;
        }

         if (input.detail.trim() === "") {
            alert("Vui lòng nhập detail");
            return;
        }

         if (input.company.trim() === "") {
            alert("Vui lòng nhập company");
            return;
        }


       

        const formData = new FormData();

        formData.append("name", input.name.trim());
        formData.append("price", input.price);
        formData.append("category", input.category);
        formData.append("brand", input.brand);
        formData.append("company", input.company);
        formData.append("detail", input.detail);
        formData.append("status", input.status);
        formData.append("sale", input.sale);
 
         avatar.forEach((file) => {
            formData.append("file[]", file);
        });


         for (let pair of formData.entries()) {
            console.log(pair[0], pair[1]);
        }


       

        axios.post("http://localhost/laravel8/laravel8/public/api/user/product/add",
            formData,
            config
        )
        .then((res) => {

            console.log("ADD PRODUCT:", res.data);

            alert("Thêm sản phẩm thành công!");

             setInput({
                name: "",
                price: "",
                category: "",
                brand: "",
                company: "",
                detail: "",
                status: "1",
                sale: 0
            });

            setAvatar([]);

        })
        .catch((error) => {

            console.log("ERROR:", error);
            console.log("MESSAGE:", error.message);
            console.log("RESPONSE:", error.response?.data);

            if (error.response?.data?.errors) {

                console.log(
                    "VALIDATION:",
                    error.response.data.errors
                );

            }

            alert("Thêm sản phẩm thất bại!");

        });

    };


    return (
        <div className="col-sm-9">

            <div className="blog-post-area">

                <h2 className="title text-center">
                    Add Product
                </h2>

                <div className="signup-form">

                    <form onSubmit={handleSubmit}>

                        {/* NAME */}
                        <input
                            type="text"
                            placeholder="Product Name"
                            value={input.name}
                            onChange={(e) =>
                                setInput({
                                    ...input,
                                    name: e.target.value
                                })
                            }
                        />


                        {/* CATEGORY */}
                        <select
                            value={input.category}
                            onChange={(e) =>
                                setInput({
                                    ...input,
                                    category: e.target.value
                                })
                            }
                        >

                            <option value="">
                                Select Category
                            </option>

                            <option value="1">
                                Category 1
                            </option>

                            <option value="2">
                                Category 2
                            </option>

                        </select>


                        {/* BRAND */}
                        <select
                            value={input.brand}
                            onChange={(e) =>
                                setInput({
                                    ...input,
                                    brand: e.target.value
                                })
                            }
                        >

                            <option value="">
                                -- Select Brand --
                            </option>

                            <option value="1">
                                Brand 1
                            </option>

                            <option value="2">
                                Brand 2
                            </option>

                        </select>


                        {/* IMAGE */}
                        <label>
                            Product Images
                        </label>

                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImage}
                        />

                        <small>
                            Tối đa 3 hình, mỗi hình nhỏ hơn 1MB
                        </small>


                        {/* PRICE */}
                        <input
                            type="number"
                            placeholder="Price"
                            value={input.price}
                            onChange={(e) =>
                                setInput({
                                    ...input,
                                    price: e.target.value
                                })
                            }
                        />


                        {/* STATUS */}
                        <select
                            value={input.status}
                            onChange={(e) =>
                                setInput({
                                    ...input,
                                    status: e.target.value,
                                    sale:
                                        e.target.value === "1"
                                            ? 0
                                            : input.sale
                                })
                            }
                        >

                            <option value="1">
                                New
                            </option>

                            <option value="0">
                                Sale
                            </option>

                        </select>


                        {/* SALE PRICE */}
                        {input.status === "0" && (

                            <input
                                type="number"
                                placeholder="Sale Price"
                                value={input.sale}
                                onChange={(e) =>
                                    setInput({
                                        ...input,
                                        sale: e.target.value
                                    })
                                }
                            />

                        )}


                        {/* DETAIL */}
                        <textarea
                            placeholder="Detail"
                            rows="6"
                            value={input.detail}
                            onChange={(e) =>
                                setInput({
                                    ...input,
                                    detail: e.target.value
                                })
                            }
                        />


                        {/* COMPANY */}
                        <input
                            type="text"
                            placeholder="Company"
                            value={input.company}
                            onChange={(e) =>
                                setInput({
                                    ...input,
                                    company: e.target.value
                                })
                            }
                        />


                        <button
                            type="submit"
                            className="btn btn-default"
                        >
                            Add Product
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Add_product;
 
