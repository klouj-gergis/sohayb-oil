import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PayPalButtons } from "@paypal/react-paypal-js";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const product = {
    name: query.get("name") || "",
    price: query.get("price") ? query.get("price") : "0",
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
    <div className="max-w-3xl w-full mx-auto p-4 sm:p-6 bg-white rounded shadow-lg text-black mt-10">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">Checkout</h2>

      {/* Product Preview */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center sm:items-start">
        <img
          src={product.image}
          alt={product.name}
          className="w-32 h-32 sm:w-24 sm:h-24 object-cover rounded"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <p className="text-sm sm:text-base">Size: {product.size}</p>
          <p className="text-sm sm:text-base font-medium">Price: EGP {product.price}</p>
        </div>
      </div>

      {/* Success Message */}
      {paymentSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-800 p-4 rounded mb-6 text-sm sm:text-base">
          Payment successful! Sending order details...
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block font-medium mb-1 text-sm sm:text-base">Name</label>
          <input
            type="text"
            name="name"
            value={buyer.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded text-sm sm:text-base"
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1 text-sm sm:text-base">Email</label>
          <input
            type="email"
            name="email"
            value={buyer.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded text-sm sm:text-base"
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1 text-sm sm:text-base">Shipping Address</label>
          <textarea
            name="address"
            value={buyer.address}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded text-sm sm:text-base"
            rows="3"
            placeholder="Your shipping address"
          />
          {errors.address && <p className="text-red-600 text-sm mt-1">{errors.address}</p>}
        </div>

        <button
          type="submit"
          className="bg-olive text-white px-6 py-2 rounded hover:bg-green-800 transition w-full sm:w-auto"
        >
          Submit Info
        </button>
      </form>

      {/* PayPal Button */}
      <div className="w-full overflow-x-auto">
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
    </div>
  );
}
