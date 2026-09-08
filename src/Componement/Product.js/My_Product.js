
import axios from "axios";
import React, { useEffect, useState } from "react";

function My_Product() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const token = localStorage.getItem("token");

        axios.get( "http://localhost/laravel8/laravel8/public/api/user/my-product",
            {
                headers: {
                    Authorization: "Bearer " + token,
                    Accept: "application/json",
                },
            }
        )
        .then((response) => {

            console.log("MY PRODUCT RESPONSE:", response.data);
             const data = response.data.data;
             console.log("DATA:", data);

            const productList = Object.values(data);
            console.log("PRODUCT LIST:", productList);
            setProducts(productList);
        })
        .catch((error) => {

            console.log("ERROR:", error);
            if (error.response) {
                console.log(
                    "ERROR RESPONSE:",
                    error.response.data
                );
            }

        });

    }, []);

    return (
        <>
            <div className="col-sm-9">

                <div className="table-responsive cart_info">

                    <table className="table table-condensed">

                        <thead>

                            <tr className="cart_menu">

                                <td className="image">
                                    Image
                                </td>

                                <td className="description">
                                    Name
                                </td>

                                <td className="price">
                                    Price
                                </td>

                                <td className="total">
                                    Action
                                </td>

                            </tr>

                        </thead>


                        <tbody>

                            {products.map((product, index) => {

                                return (

                                    <tr
                                        key={product.id || index}
                                    >

                                        {/* IMAGE */}

                                        <td className="cart_product">

                                            <img
                                                src={
                                                    "http://localhost/laravel8/laravel8/public/upload/product/" +
                                                    product.image
                                                }
                                                alt={product.name}
                                                width="100"
                                            />

                                        </td>


                                        {/* NAME */}
                                         <td className="cart_description">

                                            <h4>
                                                {product.name}
                                            </h4>

                                        </td>


                                        {/* PRICE */}
                                         <td className="cart_price">
                                             <p>
                                                ${product.price}
                                            </p>
                                         </td>
 
                                        {/* ACTION */}

                                        <td className="cart_total">

                                            <button
                                                type="button"
                                                onClick={() =>
                                                  console.log(
                                                        "EDIT:",
                                                        product
                                                    )
                                                }
                                            >
                                                +
                                            </button>


                                            <button
                                                type="button"
                                                onClick={() =>
                                                    console.log(
                                                        "DELETE:",
                                                        product.id
                                                    )
                                                }
                                            >
                                                -
                                            </button>

                                        </td>

                                    </tr>

                                );

                            })}

                        </tbody>

                    </table>

                </div>

            </div>
        </>
    );
}

export default My_Product;

