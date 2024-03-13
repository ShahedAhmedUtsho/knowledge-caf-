import React, { useEffect, useState } from "react";
import Blog from "./blog/blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ShahedAhmedUtsho/fake-data/main/5%20person%20data%20.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <div className="bg-red-200 md:w-2/3">
          <h4>blogs : {blogs.length}</h4>
        </div>
    );
};

export default Blogs;
