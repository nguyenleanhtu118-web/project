import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from './Comment';
import ListComment from './ListComment';
import Rate from './Rate';

function Detail(props) {

    let params = useParams();

    const [data, setData] = useState({});
    const [comment, setComment] = useState([]);
    const [idRely, setIdRely] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost/laravel8/laravel8/public/api/blog/detail/' + params.id)
            .then(response => {
                setData(response.data.data);
                setComment(response.data.data.comment || []);

            })
            .catch(function (error) {
                console.log(error);
            });
    }, [params.id]);






    function renderData() {

        if (data) {

            return (
                <>


                    <div className="single-blog-post">
                        <h3>{data.title}</h3>

                        <div className="post-meta">
                            <ul>
                                <li><i className="fa fa-user" /> Mac Doe</li>
                                <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                                <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                            </ul>
                        </div>

                        <a href="#">
                            <img
                                src={
                                    "http://localhost/laravel8/laravel8/public/upload/Blog/image/" +
                                    data.image
                                }
                                alt=""
                            />
                        </a>

                        <div
                            dangerouslySetInnerHTML={{
                                __html: data.content,
                            }}
                        />

                        <div className="pager-area">
                            <ul className="pager pull-right">
                                <li><a href="#">Pre</a></li>
                                <li><a href="#">Next</a></li>
                            </ul>
                        </div>
                    </div>



                </>
            );
        }
    }

    return (
        <section>
            <div className="container">
                <div className="row">

                    <div className="col-sm-9">
                        <div className="blog-post-area">
                            <h2 className="title text-center">Latest From our Blog</h2>
                            {renderData()}


                            <ul className="ratings">
                                <li className="rate-this">Rate this item:</li>
                                <li>
                                    <i className="fa fa-star color" />
                                    <i className="fa fa-star color" />
                                    <i className="fa fa-star color" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                </li>
                                <li className="color">(6 votes)</li>
                            </ul>
                            <ul className="tag">
                                <li>TAG:</li>
                                <li><a className="color" href>Pink <span>/</span></a></li>
                                <li><a className="color" href>T-Shirt <span>/</span></a></li>
                                <li><a className="color" href>Girls</a></li>
                            </ul>
                            <ListComment
                                comment={comment}
                                setIdRely={setIdRely}
                            />

                            {data && data.id && (
                                <Comment
                                    idBlog={data.id}
                                    idRely={idRely}
                                    setIdRely={setIdRely}
                                    setListComment={setComment}
                                />
                            )}


                            {/* <div class="media commnets">
						<a class="pull-left" href="#">
							<img class="media-object" src="images/blog/man-one.jpg" alt="">
						</a>
						<div class="media-body">
							<h4 class="media-heading">Annie Davis</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							<div class="blog-socials">
								<ul>
									<li><a href=""><i class="fa fa-facebook"></i></a></li>
									<li><a href=""><i class="fa fa-twitter"></i></a></li>
									<li><a href=""><i class="fa fa-dribbble"></i></a></li>
									<li><a href=""><i class="fa fa-google-plus"></i></a></li>
								</ul>
								<a class="btn btn-primary" href="">Other Posts</a>
							</div>
						</div>
					</div> */}{/*Comments*/}


                        </div>{/*/Repaly Box*/}
                    </div>
                </div>
            </div>
        </section>
    );
}



export default Detail;