
import './App.css'
import Header from './components/header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/bookmarks/Bookmarks';
function App() {


  return (
    <>

      

{/*---------------------- header start here ------------------- */}
<Header></Header>

<div className='blogs_container md:flex lg:flex '>
<Blogs></Blogs>
<Bookmarks></Bookmarks>
</div>
{/*---------------------- header end here ------------------- */}


    </>
  )
}

export default App
