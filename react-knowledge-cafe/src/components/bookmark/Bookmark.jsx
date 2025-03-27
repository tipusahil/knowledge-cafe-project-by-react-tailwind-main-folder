import PropTypes from "prop-types";
import { useEffect } from "react";

const Bookmark = ({ bookmark, remove_handler, idx }) => {

    const { title, author, posted_date, reading_time, hashtags } = bookmark;

    useEffect(() => {
        // setSpentTime(spentTime + reading_time)
    }, []);

    
    return (
        <div>

            <div className="singleBookmark flex justify-between items-center border-2 border-red-600 p-5 rounded-lg bg-gray-300 drop-shadow-xl overflow-ellipsis space-y-2 ">
                <h2 className="text-2xl "> {idx + 1} . {title}</h2> <button onClick={() => remove_handler(bookmark)} className="border border-white p-1 rounded-ee-lg rounded-ss-lg bg-white">remove</button>
            </div>

        </div>
    );
};


// Bookmark.proptypes = {
//     Bookmark: PropTypes.object,
// }
export default Bookmark;