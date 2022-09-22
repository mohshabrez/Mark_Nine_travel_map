import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const Karnataka = [
    { No: "1", Place: "chikmanglur mountains", rating: 5 },
    { No: "2", Place: "St Mary's Island", rating: 4.5 },
    { No: "3", Place: "Kudremukh Trek", rating: 4.8 }
  ];
  const Kerala = [
    { No: "1", Place: "Gavi periyar", rating: 4 },
    { No: "2", Place: "Ayyampuzha", rating: 5 },
    { No: "3", Place: "Wayanad", rating: 4.5 }
  ];
  const Goa = [
    { No: "1", Place: "Kakolem Beach", rating: 5 },
    { No: "2", Place: "Bat Island", rating: 4.2 },
    { No: "3", Place: "Butterfly beach", rating: 4.5 }
  ];
  const [currentGenre, setCurrentGenre] = useState("");
  const actionHandler = (No) => {
    setCurrentGenre(
      (No === 1 ? Karnataka : No === 2 ? Kerala : Goa).map((item) => {
        return (
          <div key={item.No} className="out">
            <div className="place_name">{item.Place}</div>
            <div className="place_rating">{item.rating} / 5</div>
          </div>
        );
      })
    );
  };

  return (
    <div className="container">
      <div className="start">
        <span>
          <h1 className="heading"> 🧭Hidden Travel🗺️ Gems✈️</h1>
        </span>
        <div className="subheading">
          Checkout The hidden places . Select a genere and note the places.
        </div>
        <div className="genre">
          {[
            { No: 1, text: "Karnataka", id: 1 },
            { No: 2, text: "kerala", id: 2 },
            { No: 3, text: "Goa", id: 3 }
          ].map((item) => {
            return (
              <button key={item.No} onClick={() => actionHandler(item.id)}>
                {item.text}
              </button>
            );
          })}
        </div>
      </div>
      <div className="output">{currentGenre}</div>
    </div>
  );
};

export default App;
