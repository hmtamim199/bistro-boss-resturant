import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularManu from "../PopularMenu/PopularManu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>bistro | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularManu></PopularManu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;