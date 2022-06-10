import CategoryHero from '../../../components/Category/CategoryHero';
import ProductCard from '../../../components/ProductCard';
import { useRouter } from 'next/router';
import { allProducts } from '../../../data';
import Resource from '../../../public/Resource';

const CategoryPage = () => {
  const router = useRouter();
  const data = router.query.category?.[1]
    ? allProducts.find(
        (item) => item.subCategory.name === router.query.category?.[1]
      )
    : allProducts.find(
        (item, index, array) =>
          item.category.name === router.query.category?.[0] &&
          array.findIndex(
            (m) => m.subCategory.name === item.subCategory.name
          ) === index
      );

  console.log(data);

  return (
    <div>
      <CategoryHero
        category={
          router.query.category?.[1]
            ? router.query.category?.[1]
            : router.query.category?.[0]
        }
        description={
          router.query.category?.[1]
            ? data?.subCategory.description
            : data?.category.description
        }
      />
      <div
        className='flex flex-wrap items-center justify-evenly px-32 translate-y-[-40px]
      mb-10'
      >
        {router.query?.category?.length > 1
          ? allProducts
              .filter(
                (data) =>
                  data.category.name === router.query?.category?.[0] &&
                  data.subCategory.name === router.query?.category?.[1]
              )
              .map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    img={product.img}
                  />
                );
              })
          : allProducts
              .filter(
                (data, index, array) =>
                  data.category.name === router?.query?.category?.[0] &&
                  array.findIndex(
                    (m) => m.subCategory.name === data.subCategory.name
                  ) === index
              )
              .map((product) => {
                return (
                  <ProductCard
                    onClick={() =>
                      router.push(
                        `${Resource.Routes.CATEGORY}/${router?.query?.category?.[0]}/${product.subCategory.name}`
                      )
                    }
                    key={product.id}
                    name={product.subCategory.name}
                    img={product.img}
                  />
                );
              })}
      </div>
    </div>
  );
};

export default CategoryPage;
