
import axios from 'axios';
import React, { useState } from 'react'

function Comment(props) {
    const [comment, setComment] = useState("");
    const [listComment, setListComment] = useState([]);

    function hanleSubmit(e) {
        e.preventDefault();
        let auth = localStorage.getItem("auth");
        if (!auth) {
            alert("dang nhap");
            return;
        }
        if (comment === "") {
            alert("nhap binh luan");
            return;
        }


        const userData = JSON.parse(localStorage.getItem("auth"));
        let accessToken = localStorage.getItem("token");
        console.log("TOKEN:", accessToken);
        let config = {
            headers: {
                Authorization: "Bearer " + accessToken,
                Accept: "application/json"
            }
        };

        if (comment) {
            const formData = new FormData();
            formData.append('id_blog', props.idBlog);
            formData.append('id_user', userData.id);
            formData.append('id_comment', props.idRely || 0);
            formData.append('comment', comment);
            formData.append('image_user', userData.avatar);
            formData.append('name_user', userData.name)




            axios.post(
                'http://localhost/laravel8/laravel8/public/api/blog/comment/' + props.idBlog,
                formData,
                config
            ).then(Response => {
                console.log(Response.data);
                alert("binh luanj thanh cong");

                if (props.setListComment) {

                    props.setListComment(prev => [
                        ...prev,
                        Response.data.data
                    ]);

                }

                setComment("");


            })
                .catch(error => {
                    console.log("===== LỖI POST COMMENT =====");
                    console.log("Status:", error.response?.status);
                    console.log("URL:", error.config?.url);
                    console.log("Method:", error.config?.method);
                    console.log("Response:", error.response?.data);
                });

        }

    }
    return (


        <div className="replay-box" id='replay'>
            <div className="row">
                <div className="col-sm-12">
                    <h2>
                        {props.idRely ? "Reply Comment" : "Leave a Reply"}
                    </h2>                    <div className="text-area">
                        <textarea rows="10" value={comment} onChange={(e) =>
                            setComment(e.target.value)} />
                        <button className="btn btn-primary" onClick={hanleSubmit}>
                            Post Comment
                        </button>
                    </div>
                </div>
            </div>



        </div>
    );

}

export default Comment