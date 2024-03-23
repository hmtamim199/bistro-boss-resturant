import { FaAd, FaBars, FaBook, FaCalendar, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensilSpoon } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../Hooks/UseCart";


const Dashboard = () => {
  const isAdmin = true;
  const [cart] = UseCart();
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="h-64 bg-orange-400 min-h-screen">
        <ul className="menu p-4">
          {
            isAdmin ? <>
              <li >
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  <h2>Admin  Home</h2>
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/dashboard/addItems">
                  <FaUtensilSpoon></FaUtensilSpoon>
                  <h2>Add Items</h2>
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageItem">
                  <FaList></FaList>
                  <h2>Manage Items</h2>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBokking">
                  <FaBook></FaBook>
                  <h2>Manage bokking</h2>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers></FaUsers>
                  <h2>All users</h2>
                </NavLink>
              </li>
            </>
              : <><li >
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
                    <h2>my cart({cart.length})</h2>
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
                </li></>
          }
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