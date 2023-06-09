import ShoppingCart from "@molecules/ShoppingCart Badge";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "@contexts/CartContext";

const NavBar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="bg-gray-200">
      <div className="section-responsive py-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl">VentaClick</h1>
        </Link>

        <NavLink
          to="/carrito"
          className={({ isActive }) =>
            isActive ? "text-gray-800 underline" : "text-gray-500"
          }
        >
          <ShoppingCart itemCount={cartItems.length} />
        </NavLink>
      </div>
    </header>
  );
};

export default NavBar;
