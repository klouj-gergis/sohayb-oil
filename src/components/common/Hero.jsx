export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-[90vh] flex items-center justify-center bg-stone px-4 sm:px-6"
      data-aos="fade-up"
    >
      <div className="flex flex-col gap-5 w-full max-w-4xl text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-olive leading-tight">
          Pure. Organic. Timeless.
        </h2>

        <p className="text-base sm:text-lg md:text-2xl text-warmbrown">
          Discover the essence of Mediterranean tradition with our cold-pressed, extra virgin olive oil — made from handpicked olives and bottled with care.
        </p>

        <div className="flex justify-center sm:justify-start">
          <a
            href="#products"
            className="bg-goldleaf text-darkolive font-medium py-2 px-4 rounded hover:opacity-90 transition text-sm sm:text-base"
          >
            Shop now
          </a>
        </div>
      </div>
    </section>
  );
}
