
import { PRODUCTS } from '../api/products';
import Product from './Product';

const Shop = () => {
  return (
    <div className="px-6 py-10">
      <h1 className="text-2xl font-semibold mb-8 text-center">Our Products</h1>
      <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-8
          justify-items-center
        ">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} /> 
        ))}
      </div>
    </div>
  );
};

export default Shop;