/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";

const Cards = ({ handleAddingBookmark }) => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("card.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  return (
    <div className="w-3/4 grid grid-cols-3 gap-5 my-10">
      {card.map((item, idx) => (
        <Card
          handleAddingBookmark={handleAddingBookmark}
          key={idx}
          item={item}
        ></Card>
      ))}
    </div>
  );
};

export default Cards;
