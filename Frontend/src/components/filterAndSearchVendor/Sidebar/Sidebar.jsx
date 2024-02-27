// Sidebar.js

import React from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Experience from "./Experience/Experience";
import AcceptedOrders from "./AcceptedOrders/AcceptedOrders";
import Ratings from "./Ratings/Ratings";
import sideBarCss from"./Sidebar.module.css";

const Sidebar = ({ handleChangecategory, handleChangePrice, handleChangeAcceptedOrder, handleChangeExperience, handleChangeRatings }) => {
  return (
    <>
      <section className={sideBarCss["sidebar"]}>
        <Category handleChangecategory={handleChangecategory} />
        <Price handleChangePrice={handleChangePrice} />
        <Experience handleChangeExperience={handleChangeExperience} />
        <AcceptedOrders handleChangeAcceptedOrder={handleChangeAcceptedOrder} />
        <Ratings handleChangeRatings={handleChangeRatings} />
      </section>
    </>
  );
};

export default Sidebar;
