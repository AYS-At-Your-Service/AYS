// Sidebar.js

import React from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Experience from "./Experience/Experience";
import AcceptedOrders from "./AcceptedOrders/AcceptedOrders";
import Ratings from "./Ratings/Ratings";
import "./Sidebar.css";

const Sidebar = ({ handleChangecategory, handleChangePrice, handleChangeAcceptedOrder, handleChangeExperience, handleChangeRatings }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h2>AYS</h2>
        </div>
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
