
import './App.css'
import Header from './components/header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/bookmarks/Bookmarks';
function App() {


  return (
    <div className='border-2 border-gray-950 max-w-7xl mx-auto'>

      

{/*---------------------- header start here ------------------- */}
<Header></Header>

<div className='blogs_container md:flex lg:flex justify-between w-[100%] border border-green-500'>
<Blogs></Blogs>
<Bookmarks></Bookmarks>
</div>
{/*---------------------- header end here ------------------- */}


    </div>
  )
}

export default App
