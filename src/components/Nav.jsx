import React from "react";
import { Gi3DGlasses } from "react-icons/gi";
import { Link } from "react-router-dom";
const Nav = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  }
  const navOptions = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  const innerOptions = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Sign out",
      link: "/",
    },
  ];

  return (

    <nav class="bg-white w-3/4 border-gray-200 dark:bg-gray-900">
      <div class=" flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex gap-4 items-center justify-center">
          <Gi3DGlasses className="text-3xl text-white" />
          <p
            className="text-2xl text-orange-500 font-semibold"
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundImage: "linear-gradient(to right, #FFA500, #FF4500)",
            }}
          >
            Picoder
          </p>
        </Link>
        <div class="flex  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="user photo"
              onClick={handleToggle}
            />
          </button>
              {navbarOpen && (
                <div
                class="z-50 absolute my-12 list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <div class="px-4 py-3">
                  <span class="block text-sm text-gray-900 dark:text-white">
                    Bonnie Green
                  </span>
                  <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    name@flowbite.com
                  </span>
                </div>
                  {innerOptions.map((option) => (
                    <li>
                      <Link
                        to={option.link}
                        class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        {option.name}
                      </Link>
                    </li>
                  ))}
              </div>
                )}
          
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <div class="flex flex-col gap-2  md:flex-row md:items-center ">
            {navOptions.map((option) => (
              <Link
                to={option.link}
                className="px-4 py-2 bg-transparent rounded-lg md:mt-0 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white "
              >
                {option.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
