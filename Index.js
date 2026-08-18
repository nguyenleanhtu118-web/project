import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Index(){
    const [getItem, setItem]=useState([])
    useEffect(() =>{
        axios.get("http://localhost/laravel8/laravel8/public/api/blog")
        .then(response =>{
            setItem(response.data.blog.data)
            console.log("res", response.data.blog.data)
        })
        .catch(function (error){
            console.log(error)
        })
    },[])


    function renderData(){
    if(getItem.length >0){
        return (getItem.map((value,key)=>{
            return(
                <div className="single-blog-post">
            <h3>{value.title}</h3>
            <div className="post-meta">
              <ul>
                <li><i className="fa fa-user" /> Mac Doe</li>
                <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
              </ul>
              <span>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half-o" />
              </span>
            </div>
            <a href>
              <img
                src={
                  "http://localhost/laravel8/laravel8/public/upload/Blog/image/" + value.image
                } alt="" />
            </a>
            <p>{value.description}</p>
            
            
             <Link className="btn btn-primary"
              to={"/blog/detail/" + value.id}>
              Read More
            </Link>
            
          </div>
            )
        }))
             
        
    }
}


return(
    <div className="blog-post-area">
        <h2 className="title text-center">Latest From our Blog</h2>
        {renderData()}
        <div className="single-blog-post">
          <h3>Girls Pink T Shirt arrived in store</h3>
          <div className="post-meta">
            <ul>
              <li><i className="fa fa-user" /> Mac Doe</li>
              <li><i className="fa fa-clock-o" /> 1:33 pm</li>
              <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
            </ul>
            <span>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" />
            </span>
          </div>
          <a href>
            <img src="images/blog/blog-one.jpg" alt="" />
          </a>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <a className="btn btn-primary" href>Read More</a>
        </div>
        <div className="single-blog-post">
          <h3>Girls Pink T Shirt arrived in store</h3>
          <div className="post-meta">
            <ul>
              <li><i className="fa fa-user" /> Mac Doe</li>
              <li><i className="fa fa-clock-o" /> 1:33 pm</li>
              <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
            </ul>
            <span>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" />
            </span>
          </div>
          <a href>
            <img src="images/blog/blog-two.jpg" alt="" />
          </a>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <a className="btn btn-primary" href>Read More</a>
        </div>
        <div className="single-blog-post">
          <h3>Girls Pink T Shirt arrived in store</h3>
          <div className="post-meta">
            <ul>
              <li><i className="fa fa-user" /> Mac Doe</li>
              <li><i className="fa fa-clock-o" /> 1:33 pm</li>
              <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
            </ul>
            <span>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" />
            </span>
          </div>
          <a href>
            <img src="images/blog/blog-three.jpg" alt="" />
          </a>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <a className="btn btn-primary" href>Read More</a>
        </div>
        <div className="pagination-area">
          <ul className="pagination">
            <li><a href className="active">1</a></li>
            <li><a href>2</a></li>
            <li><a href>3</a></li>
            <li><a href><i className="fa fa-angle-double-right" /></a></li>
          </ul>
        </div>
      </div>
    );
  }
 

export default Index