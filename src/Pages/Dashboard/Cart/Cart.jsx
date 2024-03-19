import UseCart from "../../../Hooks/UseCart";


const Cart = () => {

  const [cart] = UseCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)
  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-4xl "> items: {cart.length}</h2>
        <h2 className="text-4xl "> total price: {totalPrice}</h2>
        <button className="btn btn-primary">pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th>Image</th>
              <th>Name</th>
              <th>Price Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map(item => <tr key={item._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>)
            }



          </tbody>
          {/* foot */}


        </table>
      </div>
    </div>
  );
};

export default Cart;