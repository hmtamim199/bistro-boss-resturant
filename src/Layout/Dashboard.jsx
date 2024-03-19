import { FaAd, FaBars, FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="h-64 bg-orange-400 min-h-screen">
        <ul className="menu p-4">
          <li >
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              <h2>User Home</h2>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/dashboard/cart">
              <FaCalendar></FaCalendar>
              <h2>Reservation</h2>
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              <h2>my cart</h2>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd></FaAd>
              <h2>Add Review</h2>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <FaCalendar></FaCalendar>
              <h2>My Booking</h2>
            </NavLink>
          </li>
          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              <h2> Home</h2>
            </NavLink>
          </li>
          <li>
            <NavLink to="//order/salad">
              <FaBars></FaBars>
              <h2> Home</h2>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;