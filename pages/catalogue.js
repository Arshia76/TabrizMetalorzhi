import Catalogue from '../components/Catalogue/Catalogue';
import CatalogueCard from '../components/Catalogue/CatalogueCard';

const CataloguePage = () => {
  return (
    <div>
      <Catalogue />
      <div
        className='flex items-center justify-start px-32 
      mb-64'
      >
        <CatalogueCard />
        <CatalogueCard />
      </div>
    </div>
  );
};

export default CataloguePage;
