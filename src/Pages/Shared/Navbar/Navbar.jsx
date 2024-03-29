import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { FaShoppingCart } from 'react-icons/fa';
import UseCart from "../../../Hooks/UseCart";


const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  const [cart] = UseCart();
  const handleLogout = () => {
    logout()
      .then(() => { })
      .catch(error => console.log(error))

  }
  const navOptions =
    <>
      <li> <Link to='/'>Home</Link></li>
      <li> <Link to='/menu'>Our menu</Link></li>
      <li> <Link to='/order/salad'>Order</Link></li>
      <li>
        <Link to="/dashboard/cart">
          <button className="btn ">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>

      {
        user ? <><button onClick={handleLogout} className="btn btn-ghost">logout</button></>
          : <><li> <Link to='/login'>Login</Link></li></>
      }
      <li> <Link to='/secret'>Secret</Link></li>


    </>
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-25 bg-black max-w-screen-lg text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bristo Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;