import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "./Redux/Action";

const NavBar = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="bg-blue-600 p-1 flex justify-between items-center">
      {/* Logo */}
      <div className="w-[80px] h-[80px] mt-2"><img src="logo.png" alt="" /></div>
      
      {/* Sign Up button */}
      {!isAuthenticated ? (
        <button
          onClick={handleSignUp}
          className="bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
        >
          Sign Up
        </button>
      ) : (
        <button
          onClick={handleLogOut}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      )}
    </nav>
  )
}

export default NavBar;