import PropTypes from 'prop-types';


const Blog = ({ singleBlog }) => {

const { id ,cover ,author_img, title ,posted_date ,reading_time , hashtags} = singleBlog;
console.log(singleBlog)



    return (
        <div>
            {
                <div>
                    <h3>id: {id}</h3>
                    <h3>title: {title.slice(0,15)}</h3>
                    <h3>posted_date: {posted_date}</h3>
                    <h3>reading_time: {reading_time}</h3>
                    <h3>hashtags: {hashtags}</h3>

                    <img src={author_img} alt="" />
                    <img src={cover} alt="" />
                </div>
            }
        </div>
    );
};


Blog.propTypes = {
    Blog: PropTypes.object.isRequired,
    
}
export default Blog;