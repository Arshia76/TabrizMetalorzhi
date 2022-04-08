import ProductsHero from '../../components/Products/ProductsHero';
import ProductCard from '../../components/ProductCard';

const ProductsPage = () => {
  return (
    <main>
      <ProductsHero />
      <div
        className='flex items-center justify-evenly px-32 translate-y-[-40px]
      mb-10'
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </main>
  );
};

export default ProductsPage;
