import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import Menuitem from "../../Shared/Menu-item/Menuitem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className=" pt-12">
      {title && <Cover img={img} title={title}></Cover>}

      <div className="grid md:grid-cols-2 gap-4 mt-12 mb-12">
        {
          items.map(item => <Menuitem
            key={item._id}
            item={item}
          ></Menuitem>)
        }
      </div>
      <Link to={`/order/${title}`}><button className="btn btn-outline btn-primary border-0 border-b-4"> order now</button></Link>
    </div>
  );
};

export default MenuCategory;