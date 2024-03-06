import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import useMenu from '../../../Hooks/UseMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
  const [menu] = useMenu();

  const offered = menu.filter(item => item.category === "offered");
  const salad = menu.filter(item => item.category === "salad");
  const pizza = menu.filter(item => item.category === "pizza");
  const soup = menu.filter(item => item.category === "soup");
  const dessert = menu.filter(item => item.category === "dessert");
  return (
    <div>
      <Helmet><title>bistro | menu</title></Helmet>
      <Cover img={menuImg} title={"our menu"}></Cover>
      {/* offered menu items */}
      <SectionTitle subHeading={"don't miss"} heading={"today's offer"}></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory items={dessert} title={"dessert"} img={dessertImg} ></MenuCategory>
      {/* pizza menu */}
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      {/* soup menu */}
      <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
      {/* salad menu */}
      <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>


    </div>
  );
};

export default Menu;