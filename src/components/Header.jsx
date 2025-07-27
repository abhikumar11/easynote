import { FaPlus, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
<div className="flex justify-center space-x-4 mt-10">
  <Link to={"/newnote"}>
  <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full hover:cursor-pointer">
    <FaPlus/>
  </button>
  </Link>
  <Link to={"/"}>
  <button className="bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-full hover:cursor-pointer">
    <FaHome/>
  </button>
  </Link>
</div>


  )
}

export default Header