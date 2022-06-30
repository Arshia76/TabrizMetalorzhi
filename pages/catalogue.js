import Catalogue from '../components/Catalogue/Catalogue';
import CatalogueCard from '../components/Catalogue/CatalogueCard';

const CataloguePage = () => {
  return (
    <div>
      <Catalogue />
      <div
        className='flex items-center flex-wrap justify-start px-4 md:px-32 
      mb-64'
      >
        <CatalogueCard />
        <CatalogueCard />
      </div>
    </div>
  );
};

export default CataloguePage;
