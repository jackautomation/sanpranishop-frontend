import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import saree from "../asserts/Saree.png";
import kurta from "../asserts/kurta.jpg";
import bangle from "../asserts/bangle.jpg";
import jewellery from "../asserts/jewellery.jpg";
import nightdress from "../asserts/nightdress.jpg";
import chuditar from "../asserts/chuditar.jpg";

function MenuPage() {
  const menuItems = [
    { name: "Saree", price: "$10", image: saree, link:"/saree" },
    { name: "kurta", price: "$5", image: kurta ,link:"/kurta"},
    { name: "Chuditar", price: "$8", image: chuditar,link:"/chuditar" },
    { name: "Bangles", price: "$6", image: bangle, link:"/bangle" },
    { name: "Jwells", price: "$12", image: jewellery, link: "/jewellery" },
    { name: "Night Clothes", price: "$4", image: nightdress, link:"/nightdress" },
  ];

  return (
    <div className="container mt-5">
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <a className="navbar-brand" href="/">SanPrani Shopping</a>
        </div>
      </nav>

      {/* Page Title */}
      <h2 className="text-center text-primary mb-4">Our Collections</h2>

      {/* Menu Grid */}
      <div className="row">
        {menuItems.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <a href={item.link} className="text-decoration-none">
            <div className="card shadow">
                <div className="image-container">
                    <img src={item.image} className="card-img-top" alt={item.name} />
                </div>    
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                {/* <p className="card-text">{item.price}</p> */}
                {/* <button className="btn btn-success">Order Now</button> */}
              </div>
            </div>
            </a>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-5">
        © 2025 SanPrani Shopping - All Rights Reserved
      </footer>
    </div>
  );
}

export default MenuPage;
