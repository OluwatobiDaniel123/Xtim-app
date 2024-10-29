import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import img1 from "../../assets/images/image-currency.jpg";
import img3 from "../../assets/images/image-restaurant.jpg";
import img2 from "../../assets/images/image-plane.jpg";
import img4 from "../../assets/images/img-4.jpg";
import img5 from "../../assets/images/img-2.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out the EPIC destination</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img1}
              text="Receive money in any currency with no fees"
              paragraph="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single currency, why not try easybank today and enjoy spending in all..."
              label="By Claire Robinson"
              path="/services"
            />
            <CardItem
              src={img2}
              text="Take your Easybank card whenever you go"
              paragraph="We want you to enjoy your travels. This is why we don't charge any fees on purchasing while you're abroad. We'll even show give you discount on any purchase you make like..."
              label="By Wilson Hutton"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img3}
              text="Treat yourself without worrying about money"
              paragraph="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."
              label="By Wilson Hutton"
              path="/services"
            />
            <CardItem
              src={img4}
              text="Experience Football on Top of the Himilayan Mountains"
              paragraph="After a lot of hard work by the whole team. we're excited to launch our closed beta. It's easy to request an invite through the site..."
              label="By Claire Robinson"
              path="/products"
            />
            <CardItem
              src={img5}
              text="Our invite-only Beta accounts are now live!"
              paragraph="After a lot of hard work by the whole team. we're excited to launch our closed beta. It's easy to request an invite through the site..."
              label="By Wilson Hutton"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
