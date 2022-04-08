import CategoryHero from '../../../components/Category/CategoryHero';
import ProductCard from '../../../components/ProductCard';

const CategoryPage = () => {
  return (
    <div>
      <CategoryHero />
      <div
        className='flex items-center justify-evenly px-32 translate-y-[-40px]
      mb-10'
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default CategoryPage;
