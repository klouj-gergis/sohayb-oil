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
      className="text-black flex flex-col items-center w-full h-[100vh] justify-center"
      id="products"
      data-aos="zoom-in"
    >
      <h3 className="text-4xl font-bold text-olive">Products</h3>
      <div className="cards flex justify-around w-full gap-5 p-10">
        {products.map((product) => {
          // Build the query string properly
          const queryParams = new URLSearchParams({
            name: product.name,
            price: product.price.replace('$', ''),
            size: product.size,
            image: productImage,
          }).toString();

          return (
            <div
              key={product.name}
              className="card bg-olive border-2 border-olive flex flex-col gap-4 hover:drop-shadow-2xl/50"
            >
              <div className="image w-full bg-amber-100">
                <img src={productImage} alt="product image" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="details px-2">
                  <h4 className="text-2xl font-semibold text-stone">{product.name}</h4>
                </div>
                <div className="flex justify-between text-stone p-2">
                  <p>{product.price}</p>
                  <Link
                    to={`/checkout?${queryParams}`}
                    className="bg-darkolive px-2 py-1 hover:cursor-pointer"
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
