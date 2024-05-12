import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Card from "../Components/Card/Card";
import Footer from "../Components/Footer/Footer";
import Carousel from "../Components/Carousel/Carousel";
import axios from "axios";
import { filter } from "@chakra-ui/react";

const HomePage = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/display/foodData",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = response.data;
      console.log(responseData);
      setFoodItem(responseData[0] || []);
      setFoodCat(responseData[1] || []);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="bg-success">
      <Navbar />
      <Carousel search={search} setSearch={setSearch} />
      <div className="container">
        {foodCat && foodCat.length > 0 ? (
          foodCat.map((category) => (
            <div key={category._id} className="row mb-3">
              <div className="fs-3 m-3">{category.CategoryName}</div>
              <hr />
              {foodItem && foodItem.length > 0 ? (
                foodItem
                  .filter(
                    (item) =>
                      item.CategoryName === category.CategoryName &&
                      item.name.toLowerCase().includes(search.toLowerCase()))
                  )
                  .map((filteritems) => {
                        return (
                          <div key={filteritems._id} className="col-12 col-md-6 col-lg-3">
                          <Card foodItem={filteritems} 
                               options={filteritems.options[0]}>
                          </Card>
                           </div>
                        )
                  }
                
                ) : <div>No data found</div> 
              }
            </div>
          ))
        ) : (
          <div>No categories found</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
