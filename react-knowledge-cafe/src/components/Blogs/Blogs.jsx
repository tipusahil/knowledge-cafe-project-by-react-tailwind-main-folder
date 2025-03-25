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
        <div>
<h2 className="text-4xl w-2/3">blogs compo</h2>
            <div>
                {blogs.map(blog => <Blog singleBlog={blog}></Blog>)}
            </div>

        </div>
    );
};

export default Blogs;