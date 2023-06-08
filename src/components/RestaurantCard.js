const RestaurantCard=({
    name,
    cuisines,
    cloudinaryImageId,
    avgRating
  })=>{
    return(
     <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
      cloudinaryImageId} alt="resutaurant"  />
      <h2>{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{avgRating}</h6>
     </div>
    );
  };
  export default RestaurantCard;