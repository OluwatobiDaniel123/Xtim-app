import React from "react";
import "./Articles.css";
import img1 from "../../assets/images/image-currency.jpg";
import img3 from "../../assets/images/image-restaurant.jpg";
import img2 from "../../assets/images/image-plane.jpg";
import img4 from "../../assets/images/image-confetti.jpg";

const Articles = () => {
  const data = [
    {
      image: img1,
      name: "By Claire Robinson",
      title: "Receive money in any currency with no fees",
      paragraph:
        "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
    },
    {
      image: img2,
      name: "By Wilson Hutton",
      title: "Treat yourself without worrying about money",
      paragraph:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
    },
    {
      image: img3,
      name: "By Wilson Hutton",
      title: "Take your Easybank card whenever you go ",
      paragraph:
        "We want you to enjoy your travels. This is why we don't charge any fees on purchasing while you're abroad. We'll even show...",
    },
    {
      image: img4,
      name: "By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      paragraph:
        "After a lot of hard work by the whole team. we're excited to launch our closed beta. It's easy to request an invite through the site...",
    },
  ];

  return (
    <section className="article-page">
      <h1>Latest Articles</h1>

      <div className="article">
        {data.map((items, i) => {
          return (
            <ul className="article-list" key={i}>
              <li>
                <img src={items.image} />
                <p className="text-small">{items.name}</p>
                <a
                  target="_blank"
                  href="https://m.me/Oluwatobidaniel"
                  className="text-bold"
                >
                  {items.title}
                </a>
                <p className="text-para">{items.paragraph}</p>
              </li>
            </ul>
          );
        })}
      </div>
    </section>
  );
};

export default Articles;
