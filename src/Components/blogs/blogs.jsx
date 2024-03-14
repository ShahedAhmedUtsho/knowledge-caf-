import React, { useEffect, useState } from "react";
import Blog from "./blog/blog";
import PropTypes from 'prop-types'
const Blogs = ({handleBookmarkAdd,handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ShahedAhmedUtsho/fake-data/main/5%20person%20data%20.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <div className="  md:w-2/3 md:pr-5  ">
          

        
          {
            blogs.map(blog => <Blog blog={blog} key={blog.id} handleBookmarkAdd={handleBookmarkAdd} cover={blog.cover_img} handleMarkAsRead={handleMarkAsRead}></Blog>)
          }
        </div>
    );
};
Blogs.propTypes ={
 
  handleBookmarkAdd:PropTypes.func,
  handleMarkAsRead:PropTypes.func
}
export default Blogs;
