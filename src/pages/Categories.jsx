import React from "react";
import "./Categories.css";

import img1 from "../assets/c12(1,2).jpg";
import img2 from "../assets/c1(3).jpg";
import img3 from "../assets/c2(1,2).jpg";
import img4 from "../assets/c3(1).jpg";

function Categories() {
  const products = [
    { name: "T-Shirt & jean", price: "$500", type: "Casual wear", image: img1 },
    { name: "Saree", price: "$2500", type: "Traditional wear", image: img2 },
    { name: "T-Shirt & jean", price: "$600", type: "Casual wear", image: img3 },
    { name: "Kurti", price: "$1500", type: "Festival Wear", image: img4 },
    { name: "Kurti", price: "$1500", type: "Festival Wear", image: img4 },
    { name: "Saree", price: "$2000", type: "Traditional wear", image: img2 },
    { name: "Shirt", price: "$3000", type: "Formal wear", image: img3 },
    { name: "T-Shirt & jean", price: "$800", type: "Casual wear", image: img1 },
    { name: "T-Shirt & jean", price: "$900", type: "Casual wear", image: img3 },
    { name: "T-Shirt & jean", price: "$300", type: "Casual wear", image: img1 },
    { name: "T-Shirt & jean", price: "$200", type: "Casual wear", image: img1 },
    { name: "T-Shirt & jean", price: "$600", type: "Casual wear", image: img3 },
  ];

  return (
    <div className="category-page">
      <aside className="sidebar">
        <h4>Categories</h4>
        <p className="selected">All</p>
        <p>Men</p>
        <p>Women</p>

        <h4 className="size-title">Size</h4>
        <div className="sizes">
          <button>S</button>
          <button>L</button>
          <button>M</button>
          <button>XL</button>
          <button>XXL</button>
          <button>XXXL</button>
        </div>
      </aside>

      <main className="products-section">
        <h2>
          All/Modern/Traditional/Casual/
          <span>Formals</span>
        </h2>

        <div className="product-grid">
          {products.map((item, index) => (
            <div className="product-card" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="product-info">
                <h3>{item.name}</h3>
                <b>{item.price}</b>
              </div>
              <p>{item.type}</p>
            </div>
          ))}
        </div>

        <button className="back-btn">← Back</button>
      </main>
    </div>
  );
}

export default Categories;