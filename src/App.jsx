/* eslint-disable react/jsx-no-target-blank */

import { useState } from "react";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Cards from "./Components/Cards/Cards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [creditHourRemaining, setCreditHourRemaining] = useState(20);

  const limitOverError = () => toast("You do not have enough credit hours!");
  const doubleClickError = () => toast("You can't select the same course!");

  let remaining = 20;
  const handleAddingBookmark = (item, id) => {
    const { credit_time, price } = item;
    const isExist = bookmark.find((item) => item.id === id);
    let count = item.credit_time;

    if (isExist) {
      doubleClickError();
    } else {
      bookmark.forEach((item) => (count += item.credit_time));
      if (count <= 20) {
        setBookmark([...bookmark, item]);
        setTotalCredit(totalCredit + credit_time);
        setTotalPrice(totalPrice + price);
        setCreditHourRemaining(remaining - count);
      } else {
        limitOverError();
      }
    }
  };

  return (
    <>
      <h1 className="text-center text-3xl md:text-5xl font-bold mt-3">
        Course Registration
      </h1>
      <div className="flex flex-col-reverse md:flex-row container mx-auto gap-5 ">
        <Cards handleAddingBookmark={handleAddingBookmark}> </Cards>
        <Bookmarks
          totalPrice={totalPrice}
          totalCredit={totalCredit}
          bookmark={bookmark}
          creditHourRemaining={creditHourRemaining}
        ></Bookmarks>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
