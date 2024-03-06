import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularManu from '../../Home/PopularMenu/PopularManu';

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>
          bistro | menu
        </title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
      <PopularManu></PopularManu>
      <Cover img={menuImg} title="our menu"></Cover>
      <PopularManu></PopularManu>
      <Cover img={menuImg} title="our menu"></Cover>
      <PopularManu></PopularManu>
    </div>
  );
};

export default Menu;