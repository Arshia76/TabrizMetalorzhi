import LOGO from './Images/Logo.jpeg';
import BG from './Images/d&e/BG.png';
import BL from './Images/d&e/BL.png';
import BM from './Images/d&e/BM.png';
import BS from './Images/d&e/BS.png';
import BT from './Images/d&e/BT.png';
import WG from './Images/d&e/WG.png';
import WL from './Images/d&e/WL.png';
import WM from './Images/d&e/WM.png';
import WS from './Images/d&e/WS.png';
import ALUMINIUM from './Images/d&e/aluminium powder.png';
import BRASE from './Images/d&e/brase powder.png';
import BRONZE from './Images/d&e/bronze powder.png';
import COPPER from './Images/d&e/copper powder.png';
import IRON from './Images/d&e/iron alloy & non-alloy powder.png';
import YATAGAN from './Images/d&e/yatagan.png';

class Resource {
  static Images = {
    LOGO,
    BG,
    BL,
    BM,
    BS,
    BT,
    WG,
    WL,
    WS,
    WM,
    ALUMINIUM,
    BRASE,
    BRONZE,
    COPPER,
    IRON,
    YATAGAN,
  };

  static Routes = {
    HOME: '/',
    PRODUCTS: '/products',
    CATALOGUE: '/catalogue',
    ABOUT: '/about',
    CONTACT: '/contact',
    CATEGORY: '/products/category',
  };
}

export default Resource;
