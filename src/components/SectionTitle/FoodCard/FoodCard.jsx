import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseCart from "../../../Hooks/UseCart";


const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxiosSecure();
  const [, refetch] = UseCart();

  const { user } = UseAuth();
  const handleAddToCart = food => {
    if (user && user.email) {
      console.log(user.email, food)

      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('http://localhost:5000/carts', cartItem)
        .then(res => {
          console.log(res.data)
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} name added to uoyr cart`,
              showConfirmButton: false,
              timer: 1500
            });
            refetch();
          }
        })
    }
    else {
      Swal.fire({
        title: "you are not logged in",
        text: "please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      });
    }
  }
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure><img src={image} alt="Shoes" /></figure>
      <p className="absolute bg-slate-900 text-white right-0 mt-4 mr-4">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => { handleAddToCart(item) }}
            className="btn btn-outline btn-primary border-0 border-b-4">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;