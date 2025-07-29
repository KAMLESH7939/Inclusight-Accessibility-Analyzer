import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, Settings, User } from "lucide-react";
import chatt from "../components/main.png";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-[5rem]">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-12 ml-2">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80  transition-all">
              <div className="rounded-lg flex items-center justify-center">
                <img src={chatt} alt="no" className="w-[3.5rem] h-[2.2rem] sm:w-[5.5rem] sm:h-[4rem]"  />
              </div>
              <h1 className="text-2xl sm:text-4xl font-bold font-poppins">Inclusight</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={"/settings"}
              className={`
              btn btn-sm gap-2 transition-colors
              `}
            > 
            <MdLightMode className="w-4 h-4"/><span className="flex justify-center items-center">OR</span>
              <MdDarkMode  className="w-4 h-5"/>
              <span className="hidden sm:inline"></span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
