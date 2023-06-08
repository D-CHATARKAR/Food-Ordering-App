
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

const Body=()=>{
    const [searchTxt,setSearchTxt]=useState();
    const [allRestaurants,setAllRestaurants]=useState([]);
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);

    useEffect(()=>{
      getRestaurants();
    },[]);

    async function getRestaurants(){
      const data=await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
      const json= await data.json();
      console.log(json?.data?.cards[2]?.data.data.cards);
      setAllRestaurants(json?.data?.cards[2]?.data.data.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data.data.cards);
      
    }

   if(!allRestaurants) return null;
   return allRestaurants?.length===0?(
      <Shimmer/>
    ):
    (
        <>
        
        <div className="search-container">
            <input type="text" className="search-input" placeholder="search" value={searchTxt} 
            onChange={(e)=>{
             setSearchTxt(e.target.value);
            }}
            />
            <button className="search-btn"
              onClick={()=>{
              const data=  filterData(searchTxt,allRestaurants);
                setFilteredRestaurants(data);
              }}
            >Search</button>
        </div>
      <div className="rest-list">
        {
      filteredRestaurants.map((restaurant)=>{
        return (
        <Link 
        to={"/restaurant/"+restaurant?.data?.id} 
        key={restaurant?.data?.id}
        >
          <RestaurantCard {...restaurant.data} />
          </Link>
      
      )})
        }
      </div>
      </>
    );
  };
  export default Body;