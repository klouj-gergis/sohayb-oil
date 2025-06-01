export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-10 px-4 sm:px-6 md:px-12 max-w-3xl mx-auto mb-20 mt-20 border border-olive"
      data-aos="fade-up"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-olive">
        Contact Us
      </h2>

      <form
        action="https://formspree.io/f/mwpbegpv"
        method="POST"
        className="space-y-6"
      >
        {/* Name Field */}
        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 border border-gray-300 rounded text-sm sm:text-base"
            placeholder="Your Name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 border border-gray-300 rounded text-sm sm:text-base"
            placeholder="you@example.com"
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">Message</label>
          <textarea
            name="message"
            required
            className="w-full p-2 border border-gray-300 rounded text-sm sm:text-base text-olive"
            rows="5"
            placeholder="Your message..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full sm:w-auto bg-olive text-white px-6 py-2 rounded hover:bg-green-800 transition text-sm sm:text-base"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
