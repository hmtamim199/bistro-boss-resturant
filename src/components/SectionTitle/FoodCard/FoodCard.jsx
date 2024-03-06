

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure><img src={image} alt="Shoes" /></figure>
      <p className="absolute bg-slate-900 text-white right-0 mt-4 mr-4">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;