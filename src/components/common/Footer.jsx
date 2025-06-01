import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (/\S+@\S+\.\S+/.test(email)) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-olive text-white py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 md:flex-row md:justify-between">
        
        {/* Brand Info */}
        <div className="md:w-1/3">
          <h4 className="text-xl sm:text-2xl font-bold">Olive Essence</h4>
          <p className="text-goldleaf mt-2 text-sm">
            Pure. Organic. Timeless.
          </p>
          <p className="text-goldleaf mt-1 text-sm">
            Bringing Mediterranean excellence to your table.
          </p>
        </div>

        {/* Links */}
        <div className="md:w-1/3 flex flex-col gap-2 text-goldleaf text-sm">
          <h5 className="text-white font-semibold mb-2">Quick Links</h5>
          <a href="#home" className="hover:underline">Home</a>
          <a href="#products" className="hover:underline">Products</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        {/* Subscribe Box */}
        <div className="md:w-1/3">
          <h5 className="text-white font-semibold mb-2">Subscribe to our blog</h5>
          {subscribed ? (
            <p className="text-green-300 text-sm">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row sm:items-center gap-2">
              <input
                type="email"
                className="w-full sm:w-auto flex-1 p-2 rounded text-olive bg-white focus:outline-none text-sm"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-goldleaf text-darkolive px-4 py-2 rounded hover:opacity-90 transition text-sm"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-goldleaf mt-8 pt-4 text-center text-xs text-goldleaf">
        &copy; {new Date().getFullYear()} Olive Essence. All rights reserved.
      </div>
    </footer>
  );
}
