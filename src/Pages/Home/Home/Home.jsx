import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularManu from "../PopularMenu/PopularManu";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularManu></PopularManu>
      <Featured></Featured>
    </div>
  );
};

export default Home;