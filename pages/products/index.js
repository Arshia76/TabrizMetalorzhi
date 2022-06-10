import ProductsHero from '../../components/Products/ProductsHero';
import ProductCard from '../../components/ProductCard';
import { allProducts } from '../../data';

const ProductsPage = () => {
  return (
    <main>
      <ProductsHero />
      <div
        className='flex items-center flex-wrap justify-evenly px-32 translate-y-[-40px]
      mb-10'
      >
        {allProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.subCategory}
            img={product.img}
          />
        ))}
      </div>
    </main>
  );
};

export default ProductsPage;
