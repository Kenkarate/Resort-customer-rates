// Breadcrumbs.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const decodePathname = (pathname) => decodeURIComponent(pathname.replace(/\+/g, " "));

  return (
    <nav className="text-gray-500 pl-5">
      <ol className="list-none  flex">
        <li className=" items-center ">
          <Link to="/" className="text-gray-500 hover:underline">
            Home 
          </Link> / &nbsp;
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const decodedName = decodePathname(name);
          const isLast = index === pathnames.length - 1;

          // Exclude "rooms" from being displayed
          if (decodedName.toLowerCase() === "rooms") {
            return null;
          }

          return (
            <li key={decodedName} className="flex items-center">
              {!isLast ? (
                <Link to={routeTo} className="text-gray-500 hover:underline">
                  {decodedName}
                </Link>
              ) : (
                <span className="text-gray-800">{decodedName}</span>
              )}
              {!isLast && <span className="mx-2">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
