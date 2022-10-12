import Catalogue from '../components/Page/Catalogue/Catalogue';
import CatalogueCard from '../components/Page/Catalogue/CatalogueCard';

const CataloguePage = () => {
  return (
    <div>
      <Catalogue />
      <div
        className='flex items-center flex-wrap justify-start px-4 md:px-32 
      mb-64'
      >
        <CatalogueCard />
      </div>
    </div>
  );
};

export default CataloguePage;
