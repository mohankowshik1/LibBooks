import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
const Header = () => {
  return (
    <>
      <header className="bg-slate-100 p-2">
        <div className="brand-container flex">
          <img src={logo} alt="LIB books" className="w-10 h-10 rounded-xl" />
          <div className="flex justify-center items-center w-5/6">
            <h1 className="lg:text-6xl text-4xl text-center font-bold p-2 text-blue-600">LIB books</h1>
          </div>{" "}
        </div>
        <nav>
          <ul className="flex justify-evenly text-lg items-center max-w-5/6">
            <li className="text-gray-600 hover:text-blue-600 font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-600 hover:text-blue-600 font-semibold">
              <Link to="#">About</Link>
            </li>
            <li className="text-gray-600 hover:text-blue-600 font-semibold">
              <Link to="/discover">Discover</Link>
            </li>
            <li className="text-gray-600 hover:text-blue-600 font-semibold">
              <Link to="#">Help</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
