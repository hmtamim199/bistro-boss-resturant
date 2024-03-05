import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Menuitem from "../../Shared/Menu-item/Menuitem";

const PopularManu = () => {
  const [menu, setMenu] = useState([])
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(item => item.category === "popular")
        setMenu(popularItems)
      })
  }, [])


  return (
    <section className="mb-4">
      <SectionTitle
        subHeading="check it out"
        heading="from our menu"
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-4">
        {
          menu.map(item => <Menuitem
            key={item._id}
            item={item}
          ></Menuitem>)
        }
      </div>

    </section>
  );
};

export default PopularManu;