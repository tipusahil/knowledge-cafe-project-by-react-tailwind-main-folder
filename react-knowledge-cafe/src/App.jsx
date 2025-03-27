
import './App.css'
import Header from './components/header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/bookmarks/Bookmarks';
import { useState } from 'react';
function App() {


  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarks = newBlog => {
    // console.log("yes bookmarks addding soon", newBlog)

    const newBookmarks = [...bookmarks, newBlog];// age add howa blog gulo copy kore new blog ta sate add kora holo, then set kore dewa holo niser condtion er maddome check kore add kora hobe.
   
    // ------validation check (ortat kuno item jodi age thekei  add kora take seta add korbena , & jodi new blog hoi tkni keble add korbe.---------------------

    const isExist = bookmarks.find( (addedBlog, idx) => addedBlog.id === newBlog.id);

    if(!isExist){
      setBookmarks(newBookmarks);
console.log(`${isExist}ei item ta age chilona tai add kora hoise`);
    }
    else{
console.log(`already have that blog,tai add kora hoini...`);
alert(`this item already have added`);
    }

  }

  console.log(bookmarks);


  // --------------remove handler start here ------------------------

  const remove_handler = removeThisBookmark_Blog =>{
console.log(`remove korte hobe holo ${removeThisBookmark_Blog}`);

const afterBookmarks = bookmarks.filter(( bookmarked_Blogs ) => bookmarked_Blogs.id != removeThisBookmark_Blog.id )

setBookmarks(afterBookmarks);

  }
  // --------------remove handler end here ------------------------

// -----------------------spentTimeHanlder start here-----------------
    const [spentTime,setSpentTime] = useState(0);

    const spentTimeHanlder = newTime => {
   

      const finalnewTime = parseInt(newTime);
 console.log(finalnewTime);

      // set new time to useState
      setSpentTime(spentTime + finalnewTime);
      console.log(spentTime)

    }

// -----------------------spentTimeHanlder end here-----------------

  return (
    <div className='border-2 border-gray-950 max-w-7xl mx-auto'>



      {/*---------------------- header start here ------------------- */}
      <Header></Header>

      <div className='blogs_container md:flex lg:flex justify-between w-[100%] border border-green-500'>
        <Blogs handleBookmarks={handleBookmarks} 
        
        spentTimeHanlder={spentTimeHanlder}
        ></Blogs>
        <Bookmarks
         bookmarks={bookmarks}
         spentTime={spentTime}
         remove_handler={remove_handler}
          ></Bookmarks>
      </div>
      {/*---------------------- header end here ------------------- */}


    </div>
  )
}

export default App
