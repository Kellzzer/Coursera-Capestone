
import React from "react";
import "C:\Users\Kell\Documents\Documents\work\COursera\CcouersaCapstone-app\src\Pages\Sections\Food\Food.css";
import Button from "C:\Users\Kell\Documents\Documents\work\COursera\CcouersaCapstone-app\src\Components\Button";
import FoodCard from "C:\Users\Kell\Documents\Documents\work\COursera\CcouersaCapstone-app\src\Components\Global\styles.js";
import { useNavigate } from "react-router-dom";
import pages from "C:\Users\Kell\Documents\Documents\work\COursera\CcouersaCapstone-app\src\Pages";

const specials = [
  {
    id: 1,
    title: "Greek salad",
    description:
      "Our home-made greek saalad full of fresh vegetables and delicious harbs is a family classic.  ",
    image:
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-main.jpg",
    price: "$12.99",
  },
  {
    id: 2,
    title: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/bruschetta-index-645d03e6f174d.jpg?crop=0.8890414878397711xw:1xh;center,top&resize=1200:*",
    price: "$ 5.99",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    description:
      "Lemon's imported from our small home town in Italia. This handmade desert is a Family Favorite.",
    image:
      "https://www.southernliving.com/thmb/z706skTv8rLcnFwyTEnMzr_H5zQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living_27364_SR_Lemon-Lush_13190-fd96c709fc2946a7aeb5c869f9ad470e.jpg",
    price: "$ 5.00",
  },
];

const Specials = () => {
  const navigate = useNavigate();

  const onClickMenu = () => {
    navigate(pages.get("orders").path);
  };
  return (
    <div className="food">
      <div className="header-container">
        <h1 className="food-title">Specials</h1>
        <Button title={"Online Menu"} onClick={onClickMenu} />
      </div>

      <div className="header-list">
        {food.map((special) => (
          <FoodCard
            key={food.id}
            title={food.title}
            description={food.description}
            image={food.image}
            price={food.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Food;
