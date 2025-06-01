export default function Contact() {
  return (
    <section id="contact" className="bg-white py-12 px-4 md:px-12 max-w-3xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-center text-olive">Contact Us</h2>

      <form
        action="https://formspree.io/f/mwpbegpv" // Replace with your actual Formspree form ID
        method="POST"
        className="space-y-6"
      >
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea
            name="message"
            required
            className="w-full p-2 border border-gray-300 rounded text-olive"
            rows="5"
            placeholder="Your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-olive text-white px-6 py-2 rounded hover:bg-green-800 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
