import React from "react";
import { container, Logo, LogoutBtn } from "../Index";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "About", slug: "/about", active: !authStatus },
    { name: "Contact", slug: "/contact", active: !authStatus },
  ];
  return (
    <div>
      <header className="py-3 shadow bg-gray-500">
        <container>
          <nav className="flex items-center justify-between">
            <div className="mr-4">
              <Link to="/">
                <Logo width="70" />
              </Link>
            </div>

            <ul className="flex">
              {navItems.map((items) =>
                items.active ? (
                  <li key={items.name}>
                    <button
                      className="text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300"
                      onClick={() => navigate(items.slug)}
                    >
                      {items.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </nav>
        </container>
      </header>
    </div>
  );
}

export default Header;
