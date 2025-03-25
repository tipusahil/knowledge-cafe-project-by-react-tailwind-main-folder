import { useEffect, useState } from "react";
import Blog from "../SingleBlog/Blog";
const Blogs = () => {

    // -----------------json data fetching start here -------------

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("./blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => console.log(`error ta holo = ${err}`))
    }, []);

    // -----------------json data fetching end here -------------


    return (
        <div className="w-2/3 border border-blue-500">
<h2 className="text-4xl ">blogs compo</h2>
            <div>
                {blogs.map(blog => <Blog key= {blog.id} singleBlog={blog}></Blog>)}
            </div>

        </div>
    );
};

export default Blogs;