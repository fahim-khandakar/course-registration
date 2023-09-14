/* eslint-disable react/prop-types */
import logo from "../../Asset/Frame.png";
import dollar from "../../Asset/Dollar.png";
const Card = ({ item, handleAddingBookmark }) => {
  const { id, cover, title, description, credit_time, price } = item;
  return (
    <div>
      <div className=" bg-base-100 shadow-xl p-5 h-[400px]">
        <figure>
          <img src={cover} alt="cover" />
        </figure>
        <div className="py-5">
          <h2 className="text-lg font-semibold pb-3">{title}</h2>
          <p className="pb-3">{description}</p>
          <div className="flex justify-around">
            <div className="flex gap-2">
              <img src={dollar} alt="" />
              <p> Price: {price}</p>
            </div>
            <div className="flex gap-2">
              <img src={logo} alt="" />
              <p>Credit: {credit_time}hrs</p>
            </div>
          </div>
          <button
            onClick={() => handleAddingBookmark(item, id)}
            className="py-2 w-full text-center text-white bg-[#2F80ED] rounded-lg mt-5"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
