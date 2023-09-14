/* eslint-disable react/jsx-no-target-blank */

import { useState } from "react";
import "./App.css";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Cards from "./Components/Cards/Cards";

function App() {
  const [bookmark, setBookmark] = useState([]);

  const handleAddingBookmark = (item) => {
    const newBookmark = [...bookmark, item];
    setBookmark(newBookmark);
  };
  return (
    <>
      <h1 className="text-center text-5xl font-bold mt-3">
        Course Registration
      </h1>
      <div className="flex container mx-auto gap-5 ">
        <Cards handleAddingBookmark={handleAddingBookmark}> </Cards>
        <Bookmarks bookmark={bookmark}></Bookmarks>
      </div>
    </>
  );
}

export default App;
