
/* import Profile from "../../../../knowledge-cafe/images/1.jpg";
import Profile from "../../../../knowledge-cafe/images/2.jpg";
import Profile from "../../../../knowledge-cafe/images/3.jpg";
import Profile from "../../../../knowledge-cafe/images/4.jpg";
 */

import Profile from "../../assets/images/profile.png";
import Girl1 from "../../assets/images/profile.png";
import Girl2 from "../../assets/images/profile.png";
// import boy1 from "../../assets/images/profile.png";
// import boy2 from "../../assets/images/profile.png";




const Header = () => {


    return (
        <header className="">
<nav className="navbar p-4 flex justify-between items-center border-b-2 border-gray-400 mx-4">
<h1 className='text-4xl text-green-600'>Knowledge cafe</h1>
<img src={Profile} alt="" />
</nav>
            {/* <h2>i am header from header component & i have called from app.jsx</h2> */}

        </header>

    );
};

export default Header;