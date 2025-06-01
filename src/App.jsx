import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Home from "./components/pages/Home.jsx";
import Checkout from "./components/pages/Checkout.jsx";
import ThankYou from "./components/pages/Thankyou.jsx";

function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": "ATNdwhCwuFQa6AXA525gJ44KRXsHwzRQ7wQmFsI7L36SE3c4BXtMCu-XguFRhZGD8eK7gGu_RNOxXti2" }}>
      <Router basename="/sohayb-oil">
        <div className="bg-stone text-white font-playfair min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thank-you" element={<ThankYou />} /> {/* Add ThankYou route */}
          </Routes>
        </div>
      </Router>
    </PayPalScriptProvider>
  );
}

export default App;
