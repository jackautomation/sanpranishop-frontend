import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function PaymentGateway() {
  const location = useLocation();
  const { name, discountPrice, method } = location.state;

  useEffect(() => {
    // Call backend API to process payment (You need to implement a backend)
    axios.post("http://localhost:5000/pay", {
      amount: discountPrice,
      productinfo: name,
      method,
      firstname: "Jagadeesh S",
      email: "jagadeesh1228@gmail.com",
    })
    .then((response) => {
      if (response.data.success) {
        window.location.href = response.data.paymentData.action;
      }
    })
    .catch((error) => {
      console.error("Payment Error:", error);
    });
  }, [name, discountPrice, method]);

  return (
    <div className="container text-center mt-5">
      <h2>Processing {method.toUpperCase()} Payment...</h2>
      <p>Please wait while we redirect you to the payment gateway.</p>
    </div>
  );
}

export default PaymentGateway;
