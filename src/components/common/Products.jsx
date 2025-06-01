import productImage from '../../assets/product-image.webp';
import { Link } from "react-router-dom";

const products = [
  { name: 'large', price: '$24', size: '400ml' },
  { name: 'meduim', price: '$20', size: '350ml' },
  { name: 'Small', price: '$15', size: '250ml' },
];

export default function Products() {
  return (
    <section
      className="text-black flex flex-col items-center w-full min-h-screen justify-center px-4 py-12"
      id="products"
      data-aos="zoom-in"
    >
      <h3 className="text-4xl font-bold text-olive mb-8">Products</h3>
      <div className="cards flex flex-wrap justify-center gap-6 w-full max-w-7xl px-4">
        {products.map((product) => {
          const queryParams = new URLSearchParams({
            name: product.name,
            price: product.price.replace('$', ''),
            size: product.size,
            image: productImage,
          }).toString();

          return (
            <div
              key={product.name}
              className="card bg-olive border-2 border-olive flex flex-col gap-4 hover:drop-shadow-2xl/50
                         w-full max-w-xs sm:max-w-sm md:max-w-md"
            >
              <div className="image w-full bg-amber-100">
                <img src={productImage} alt="product image" className="w-full h-auto" />
              </div>
              <div className="flex flex-col gap-1 px-4 pb-4">
                <div className="details">
                  <h4 className="text-2xl font-semibold text-stone">{product.name}</h4>
                </div>
                <div className="flex justify-between text-stone pt-2">
                  <p>{product.price}</p>
                  <Link
                    to={`/checkout?${queryParams}`}
                    className="bg-darkolive px-4 py-2 hover:cursor-pointer rounded text-white"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
