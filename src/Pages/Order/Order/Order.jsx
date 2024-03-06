import { Helmet } from "react-helmet-async";
import coverImg from '../../../assets/shop/banner2.jpg'
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../Hooks/UseMenu";
import FoodCard from "../../../components/SectionTitle/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";


const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  // data
  // const offered = menu.filter(item => item.category === "offered");
  const salad = menu.filter(item => item.category === "salad");
  const pizza = menu.filter(item => item.category === "pizza");
  const soup = menu.filter(item => item.category === "soup");
  const dessert = menu.filter(item => item.category === "dessert");
  return (
    <div>
      <Helmet><title>bistro | order</title></Helmet>
      <Cover img={coverImg} title={"Order food"}></Cover>
      {/* tabss */}
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>dessert</Tab>
          <Tab>soup</Tab>
          <Tab>pizza</Tab>
          <Tab>salad</Tab>
          <Tab>drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
      </Tabs>


    </div>
  );
};

export default Order;