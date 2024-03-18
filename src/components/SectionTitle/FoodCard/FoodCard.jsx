import { useNavigate } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import Swal from "sweetalert2";


const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  const navigate = useNavigate();

  const { user } = UseAuth();
  const handleAddToCart = food => {
    if (user && user.email) {
      // 
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
          navigate('/login')
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