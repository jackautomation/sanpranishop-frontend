import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PaymentOptions() {
  const location = useLocation();
  const navigate = useNavigate();
  const saree = location.state;

  const handlePaymentMethod = (method) => {
    navigate("/pay", { state: { ...saree, method } });
  };

  return (
    <div className="container mt-5 text-center">
      <h2 className="text-primary">Select Payment Method</h2>
      <h4 className="mt-3">{saree.name} - ₹{saree.discountPrice}</h4>

      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-success mx-2" onClick={() => handlePaymentMethod("credit_card")}>
          Pay with Credit Card
        </button>
        <button className="btn btn-info mx-2" onClick={() => handlePaymentMethod("debit_card")}>
          Pay with Debit Card
        </button>
        <button className="btn btn-warning mx-2" onClick={() => handlePaymentMethod("upi")}>
          Pay with UPI
        </button>
      </div>
    </div>
  );
}

export default PaymentOptions;
