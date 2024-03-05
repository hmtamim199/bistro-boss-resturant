import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css';


const Featured = () => {
  return (
    <div className="featured text-white bg-fixed pt-12 my-20">
      <SectionTitle subHeading="check it out" heading="featured items"></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-5">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>march 5, 2024</p>
          <p className="uppercase">where can i get some?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ea ullam perspiciatis porro dignissimos hic eum facere ipsum earum, repellat animi. Id commodi culpa inventore officiis ex! Voluptatum eum doloremque distinctio magni minus consequatur recusandae, nisi debitis mollitia, atque delectus consectetur earum quam natus id. Dolores fugiat at nam aspernatur?</p>
          <button className="btn btn-outline btn-primary border-0 border-b-4">oreder now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;