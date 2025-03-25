import { useEffect, useState } from "react";

const Blogs = () => {

// -----------------json data fetching start here -------------

const [blogs, setBlogs] = useState([]);

useEffect(()=> {
    fetch("./blogs.json")
    .then(res => res.json())
    .then(data => setBlogs(data) )
    .catch(err => console.log(`error ta holo = ${err}`))
},[]);

// -----------------json data fetching end here -------------


    return (
        <div>
           {blogs.map(blog => (
            <div>
                <img src={blog.author_img} alt="" />
                <img src={blog.cover} alt="" />
            </div>
           ))} 
        </div>
    );
};

export default Blogs;