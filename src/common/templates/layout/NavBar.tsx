import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-gray-200">
      <div className="section-responsive py-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl">VentaClick</h1>
        </Link>

        <nav>
          <NavLink
            to="/carrito"
            className={({ isActive }) =>
              isActive ? "text-gray-800 underline" : "text-gray-500"
            }
          >
            Carrito
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
