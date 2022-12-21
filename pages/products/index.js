import ProductsHero from '../../components/Page/Products/ProductsHero';
import ProductCard from '../../components/Common/ProductCard';
import { allProducts } from '../../data';
import { useRouter } from 'next/router';
import Resource from '../../public/Resource';

const ProductsPage = () => {
  const router = useRouter();
  return (
    <main>
      <ProductsHero />
      <div
        className='flex items-center flex-wrap justify-evenly px-32 translate-y-[-40px]
      mb-10'
      >
        {allProducts
          .filter((p, index) => allProducts.indexOf(p) === index)
          .map((product) => (
            <ProductCard
              key={product.id}
              name={product.subCategory.name}
              img={product.img}
              onClick={() =>
                router.push(
                  `${Resource.Routes.CATEGORY}/${router?.query?.category?.[0]}/${product.subCategory.name}`
                )
              }
            />
          ))}
      </div>
    </main>
  );
};

export default ProductsPage;
