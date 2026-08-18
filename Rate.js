import React, { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "react-simple-star-rating";

function Rate(props) {

    const [rating, setRating] = useState(0);
    const [average, setAverage] = useState(0);

    // Lấy danh sách rate khi load trang
    useEffect(() => {

        axios.get(
            "http://localhost/laravel8/laravel8/public/api/blog/rate/" + props.idBlog
        )
        .then(response => {

            console.log("===== GET RATE =====");
            console.log(response.data);

            // tùy API trả về kiểu nào
            let data = response.data.data || [];

            if (Array.isArray(data) && data.length > 0) {

                let total = 0;

                data.forEach(item => {
                    total += Number(item.rate);
                });

                let avg = total / data.length;

                setAverage(avg);
                setRating(avg);

            } else {
                setAverage(0);
                setRating(0);
            }

        })
        .catch(error => {
            console.log("===== LỖI GET RATE =====");
            console.log(error);
        });

    }, [props.idBlog]);


    // Click vào sao
    const handleRating = (rate) => {

        let auth = localStorage.getItem("auth");

        // Chưa đăng nhập
        if (!auth) {
            alert("Vui lòng đăng nhập");
            return;
        }

        let userData = JSON.parse(auth);
        let accessToken = localStorage.getItem("token");

        let data = {
            user_id: userData.id,
            blog_id: props.idBlog,
            rate: rate
        };

        let config = {
            headers: {
                Authorization: "Bearer " + accessToken,
                Accept: "application/json"
            }
        };

        console.log("===== POST RATE =====");
        console.log(data);

        axios.post(
            "http://localhost/laravel8/laravel8/public/api/blog/rate/" + props.idBlog,
            data,
            config
        )
        .then(response => {

            console.log("===== RATE THÀNH CÔNG =====");
            console.log(response.data);

            setRating(rate);

            alert("Đánh giá thành công");

        })
        .catch(error => {

            console.log("===== LỖI POST RATE =====");
            console.log("Status:", error.response?.status);
            console.log("Response:", error.response?.data);

        });
    };


    return (
        <div>

            <ul className="ratings">

                <li className="rate-this">
                    Rate this item:
                </li>

                <li>

                    <Rating
                        onClick={handleRating}
                        initialValue={rating}
                        size={25}
                        transition
                        fillColor="gold"
                        emptyColor="gray"
                    />

                </li>

                <li className="color">
                    ({average.toFixed(1)} votes)
                </li>

            </ul>

        </div>
    );
}

export default Rate;