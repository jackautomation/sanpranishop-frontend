import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import saree1 from "../asserts/sareepage/saree1.jpg";
import saree2 from "../asserts/sareepage/saree2.jpg";
import saree3 from "../asserts/sareepage/saree3.png";
import saree4 from "../asserts/sareepage/saree4.jpg";

function SareePage() {

  const navigate = useNavigate();

  const sareeCollection = [
    { name: "Elegant Silk Saree", originalPrice: "₹750", discountPrice: "₹500", image: saree1 },
    { name: "Banarasi Saree", originalPrice: "₹1750", discountPrice: "₹1200", image: saree2 },
    { name: "Cotton Saree", originalPrice: "₹1350", discountPrice: "₹1000", image: saree3 },
    { name: "Designer Party Saree", originalPrice: "₹1400", discountPrice: "₹1000", image: saree4 },
  ];

  const handleBuyNow = (saree) => {
    navigate("/payment-options", { state: saree });
  };

  return (
    <div className="container mt-5">
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <a className="navbar-brand" href="/">SanPrani Shopping</a>
        </div>
      </nav>

      <h2 className="text-primary text-center mb-4">Saree Collection</h2>

      {/* Saree Collection Grid */}
      <div className="row">
        {sareeCollection.map((saree, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card shadow">
              <img src={saree.image} className="card-img-top" alt={saree.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{saree.name}</h5>
                <p className="card-text">
                  <span className="text-muted" style={{ textDecoration: "line-through" }}>
                    {saree.originalPrice}
                  </span>{" "}
                  <span className="text-success fw-bold">{saree.discountPrice}</span>
                </p>
                <button className="btn btn-primary" onClick={() => handleBuyNow(saree)}>Buy Now</button>
              </div>
            </div>
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

export default SareePage;
