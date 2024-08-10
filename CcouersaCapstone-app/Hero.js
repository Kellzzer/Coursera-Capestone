import React from "react";
import "./Hero.css";
import Button from "C:\Users\Kell\Documents\Documents\work\COursera\CcouersaCapstone-app\src\Components\Button\Button.css";
import Image from "C:\Users\Kell\Documents\Documents\work\COursera\CcouersaCapstone-app\icons_assets\restaurant chef B.jpg";
import { useNavigate } from "react-router-dom";
import pages from "C:\Users\Kell\Documents\Documents\work\COursera\CcouersaCapstone-app\src\Pages";

const Hero = () => {
  const navigate = useNavigate();
  const onClickReserve = () => {
    navigate(pages.get("reservations").path);
  }

  return (
    <div className="hero-background">
      <div className="hero">
        <div>
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p>
            In the busy city of Chicago there is a small, family owned restaurant that brings back memories of a childhood in the heart of italy.
            
          </p>
          <Button title={"Reserve a table"} onClick={onClickReserve} />
        </div>

        <img
          className="image"
          src={Image}
          alt="Restarurant food"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default Hero;