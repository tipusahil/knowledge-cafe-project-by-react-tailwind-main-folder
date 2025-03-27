import PropTypes from 'prop-types';
import { MdBookmarkAdded } from "react-icons/md";

const Blog = ({ singleBlog , handleBookmarks }) => {

    const { id, cover, author_img, title, author, posted_date, reading_time, hashtags } = singleBlog;
    // console.log(singleBlog)



    return (
        <div className='blog_main_container border-4 border-red-500 p-5 mb-3 space-y-1'>

            <div className="cover_container  border-2 border-blue-500">
                <img className='w-full rounded-2xl size-11/12 ' src={cover} alt={`this is image of the title : ${title}`} />
            </div>

            <div className="author_bar  flex justify-between items-center border border-red-500">

                <div className="profile_side flex items-center ">
                    <img className='size-14 rounded-full' src={author_img} alt="" />

                    <div className="profile_side_content ml-4">
                        <h3 className="text-xl font-semibold">{author}</h3>
                        <p>{title.slice(0, title.length - 1)}</p>
                    </div>

                </div>

                <div className="read_side flex justify-center items-center space-x-2 ">
                    <h3><span className='bg-slate-300 rounded-lg p-1'> 0{reading_time}</span> min read</h3>
                    <button onClick={ () => handleBookmarks(singleBlog)} className=' text-3xl'> <MdBookmarkAdded /> </button>

                </div>
            </div>

            <div className="big_title_container_of_blog space-y-3 my-3">
                <h3 className="text-4xl font-semibold ">{title}</h3>
                <div className="hash_contain flex">
                    {hashtags.map((hash1, idx) => (
                        
                        <div className="mr-2">
                            <h2> {idx + 1}. {hash1}</h2>
                            
                        </div>
                    ))}
                </div>

                <div>
                    <p><a className='underline text-blue-700' href="#">Mark as read</a></p>
                </div>
            </div>

            {/* <div>

                <h3>posted_date: {posted_date}</h3>
                <h3>id: {id}</h3>
                <h3>title: {title.slice(0, 15)}</h3>

                <h3>hashtags: {hashtags}</h3>
  <img src={cover} alt="" />
               
            </div> */}

        </div>
    );
};



Blog.propTypes = {
    Blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,

}
export default Blog;