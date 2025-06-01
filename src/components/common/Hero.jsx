export default function Hero() {
  return (
    <section id="hero" className="w-full h-[90vh] flex items-center justify-center bg-stone" data-aos="fade-up">
      <div className="flex flex-col gap-5 w-6/12">
        <h2 className="text-6xl font-semibold text-olive">
          Pure. Organic. Timeless.
        </h2>
        <p className="text-2xl text-warmbrown w-full">
          Discover the essence of Mediterranean tradition with our cold-pressed, extra virgin olive oil — made from handpicked olives and bottled with care.
        </p>
        <a href="#products" className="bg-goldleaf text-darkolive font-medium w-fit py-2 px-4 rounded hover:opacity-90 transition">
          Shop now
        </a>
      </div>
    </section>
  );
}      
