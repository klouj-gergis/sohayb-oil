import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PayPalButtons } from "@paypal/react-paypal-js";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const product = {
    name: query.get("name") || "",
    price: query.get("price") ? query.get("price") : "0", // keep numeric string for PayPal
    size: query.get("size") || "",
    image: decodeURIComponent(query.get("image") || ""),
  };

  const [buyer, setBuyer] = useState({ name: "", email: "", address: "" });
  const [errors, setErrors] = useState({});
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!buyer.name.trim()) newErrors.name = "Name is required";
    if (!buyer.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(buyer.email)) newErrors.email = "Invalid email";
    if (!buyer.address.trim()) newErrors.address = "Address is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const sendOrderEmail = async () => {
    const data = {
      "form-name": "checkout",
      productName: product.name,
      productPrice: `EGP ${product.price}`,
      productSize: product.size,
      buyerName: buyer.name,
      buyerEmail: buyer.email,
      shippingAddress: buyer.address,
    };

    try {
      const res = await fetch("https://formspree.io/f/mwpbegpv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        console.log("Order info sent successfully!");
      } else {
        console.error("Failed to send order info");
      }
    } catch (err) {
      console.error("Error sending order info:", err);
    }
  };

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
    sendOrderEmail();
    setTimeout(() => navigate("/thank-you"), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Please complete the payment using the PayPal button below.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded text-black mt-10">
      <h2 className="text-3xl font-semibold mb-6">Checkout</h2>
      <div className="flex gap-4 mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 object-cover rounded"
        />
        <div>
          <h3 className="text-xl font-bold">{product.name}</h3>
          <p>Size: {product.size}</p>
          <p>Price: EGP {product.price}</p>
        </div>
      </div>

      {paymentSuccess && (
        <div className="bg-green-200 text-green-800 p-4 rounded mb-6">
          Payment successful! Sending order details...
        </div>
      )}

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={buyer.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={buyer.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Shipping Address</label>
          <textarea
            name="address"
            value={buyer.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="3"
            placeholder="Your shipping address"
          />
          {errors.address && <p className="text-red-600 text-sm">{errors.address}</p>}
        </div>

        <button
          type="submit"
          className="bg-olive text-white px-6 py-2 rounded hover:bg-green-800 transition"
        >
          Submit Info
        </button>
      </form>

      {/* Use the PayPalButtons component here */}
      <PayPalButtons
        style={{ layout: "vertical", color: "blue", shape: "pill" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.name,
                amount: {
                  currency_code: "EGP",
                  value: product.price,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(() => {
            handlePaymentSuccess();
          });
        }}
        onError={(err) => {
          console.error(err);
          alert("Payment failed. Please try again.");
        }}
      />
    </div>
  );
}
