import PropTypes from "prop-types";
import Bookmark from "../bookmark/bookmark";
import { useState } from "react";

const Bookmarks = ({ bookmarks, remove_handler }) => {

    // console.log(bookmarks);


    // const [spentTime,setSpentTime] = useState(0);

    return (
        <div className="w-1/3 border border-gray-950">

            <div className="spentTime_container rounded-xl border-2 border-blue-400 text-2xl text-blue-400 w-full p-4">
                {/* <h1>spent time on read:  <span>{177}</span>min </h1> */}
            </div>

            <h2 className="text-3xl ">bookmarks Blogs:{bookmarks.length} </h2>




            <div className="bookmarks_container space-y-2 ">
                {bookmarks.map((bookmark, idx) => <Bookmark
                    key={bookmark.id}
                    bookmark={bookmark}
                    remove_handler={remove_handler}
                    idx={idx}
                    // setSpentTime={setSpentTime}
                    // spentTime={spentTime}
                ></Bookmark> )}
            </div>
        </div>
    );
};

/*                    // setSpentTime(spentTime + bookmark.reading_time)

*/

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    remove_handler: PropTypes.func.isRequired,
}
export default Bookmarks;