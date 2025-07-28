import { FaPlus, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center mt-8 mb-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        📝 EasyNotes
      </h1>
      <div className="flex justify-center space-x-4">
        <Link to={"/newnote"}>
          <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full hover:cursor-pointer" title="Add Note">
            <FaPlus />
          </button>
        </Link>
        <Link to={"/"}>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-full hover:cursor-pointer" title="Home">
            <FaHome />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
