import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const boats = useSelector((state) => state.user.boats);
  const vehicles = useSelector((state) => state.user.vehicles);

  return (
    <div className="home-container">
      <div className="banner-container">
        <img
          alt="banner image"
          src="https://goboatnbucky.s3.us-east-2.amazonaws.com/eduardlabar_med.jpg"
        />
      </div>
      <div className="user_items">
        <div>
          <h2>Boats</h2>
          {boats.map((item, i) => (
            <div key={i}>{item.name}</div>
          ))}
        </div>
      </div>
      <div className="user_items">
        <div>
          <h2>Vehicles</h2>
          {vehicles.map((item, i) => (
            <div key={i}>{item.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
