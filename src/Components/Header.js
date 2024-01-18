import React from "react";
import image from "./logo parakkat.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Store/authSlice";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Dispatch the logoutUser action
    dispatch(logoutUser());
    navigate("/login");
  };

  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    <div className="p-3 ">
      {/* <img className="lg:w-24 w-16 p-2 " src={image} alt="" />
      <a className="p-2 text-white rounded border bg-red-400" href="/login" onClick={handleLogout}>
        Logout
      </a> */}

      <script src="https://cdn.tailwindcss.com"></script>

      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>

      <header class=" relative shadow-lg px-3 py-2">
        <nav class="flex justify-between">
          <div class="w-[130px] md:w-[200px] flex items-center">
            <img
              src={image}
              className="lg:w-24 w-16 p-2 "
              alt="LOGO"
              srcset=""
            />
          </div>
          <div class="flex items-center gap-3">
            <div class="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5 "></div>
            {/* <div class="flex items-center gap-2">
              <button
                type="button"
                class="hover:bg-clip-text bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3]  font-bold text-white px-5 py-2 rounded-full "
                onClick={handleLogout}
              >
                Logout
              </button>
              <ion-icon
                name="menu"
                onclick="onMenuToggle(this)"
                class="text-[30px] cursor-pointer md:hidden"
              ></ion-icon>
            </div> */}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
