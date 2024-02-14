import { useState } from "react";

import Navigation from "./SearchAndSort/searchAndSort";
import Products from "./Products/Products";// 
import products from "../../services/VendorInfo.js";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

import Card from './cardAndButton/Card.jsx';

const FilterComponent = () => {
  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );




  const [selectedCategory, setSelectedCategory] = useState(null);


  // ------------ Button Filtering -----------Recommended
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };


  // ----------- Radio Filtering -----------for category
  const handleChangecategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ----------- Radio Filtering -----------for price
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handleChangePrice = (event) => {
    setSelectedPrice(event.target.value);
  };



  // ----------- Radio Filtering -----------for accepted order
  const [selectedAcceptedOrder, setSelectedAcceptedOrder] = useState(null);

  const handleChangeAcceptedOrder = (event) => {
    setSelectedAcceptedOrder(event.target.value);
  };

  // ----------- Radio Filtering -----------for Experience
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleChangeExperience = (event) => {
    setSelectedExperience(event.target.value);
  };
  // Ratings radio filtering
  const [selectedRatings, setSelectedRatings] = useState(null);

  const handleChangeRatings = (event) => {
    setSelectedRatings(event.target.value);
  };

  // sorting

  const [selectedSort, setSelectedSort] = useState(null);
  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };




  function filteredData(
    products,
    selectedCategory,
    query,
    selectedSort,
    selectedPrice,
    selectedAcceptedOrder,
    selectedExperience,
    selectedRatings
  ) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter for category
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        ({ category }) => category === selectedCategory
      );
    }

    // Applying selected filter for price
    if (selectedPrice) {
      filteredProducts = filteredProducts.filter(
        ({ hourlyRate }) => parseInt(hourlyRate, 10) <= parseInt(selectedPrice, 10)
      );
    }

    // Applying selected filter for accepted order
    if (selectedAcceptedOrder) {
      const [min, max] = selectedAcceptedOrder.split('-').map(Number);
      filteredProducts = filteredProducts.filter(
        ({ acceptedRequests }) =>
          parseInt(acceptedRequests, 10) >= min && parseInt(acceptedRequests, 10) <= max
      );
    }

    // Applying selected filter for experience
    if (selectedExperience) {
      filteredProducts = filteredProducts.filter(
        ({ experienceYears }) => experienceYears >= parseInt(selectedExperience, 10)
      );
    }
    if (selectedRatings) {
      filteredProducts = filteredProducts.filter(
        ({ customerRating }) => parseFloat(customerRating) >= parseFloat(selectedRatings)
      );
    }

    // Sorting
    if (selectedSort === "priceLowToHigh") {
      filteredProducts = filteredProducts.sort(
        (a, b) => parseInt(a.hourlyRate, 10) - parseInt(b.hourlyRate, 10)
      );
    } else if (selectedSort === "priceHighToLow") {
      filteredProducts = filteredProducts.sort(
        (a, b) => parseInt(b.hourlyRate, 10) - parseInt(a.hourlyRate, 10)
      );
    } else if (selectedSort === "rating") {
      filteredProducts = filteredProducts.sort(
        (a, b) => parseFloat(b.customerRating) - parseFloat(a.customerRating)
      );
    } else if (selectedSort === "experience") {
      filteredProducts = filteredProducts.sort(
        (a, b) => b.experienceYears - a.experienceYears
      );
    } else if (selectedSort === "AcceptedRequests") {
      filteredProducts = filteredProducts.sort(
        (a, b) => b.acceptedRequests - a.acceptedRequests
      );
    }

    return filteredProducts.map(
      ({ image, name, category, hourlyRate, experienceYears, acceptedRequests, customerRating }) => (
        <Card
          key={Math.random()}
          image={image}
          name={name}
          category={category}
          hourlyRate={hourlyRate}
          experienceYears={experienceYears}
          acceptedRequests={acceptedRequests}
          customerRating={customerRating}
        />
      )
    );
  }

  const result = filteredData(   //contains the cards for the vendors
    products,
    selectedCategory,
    query,
    selectedSort,
    selectedPrice,
    selectedAcceptedOrder,
    selectedExperience,
    selectedRatings
  );

  return (
    <>
      
      <Navigation query={query} handleInputChange={handleInputChange} handleSortChange={handleSortChange} />
      <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar
          handleChangecategory={handleChangecategory}
          handleChangePrice={handleChangePrice}
          handleChangeAcceptedOrder={handleChangeAcceptedOrder}
          handleChangeExperience={handleChangeExperience}
          handleChangeRatings={handleChangeRatings}
        />
        <div>
          
          <Recommended handleClick={handleClick} />
          <Products result={result} />
        </div>
      </div>
    </>
  );
  
};

export default FilterComponent;
