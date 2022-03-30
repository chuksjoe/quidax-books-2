import SearchInput from './SearchInput';

import Logo from '../assets/images/brand.png';
import Shelve from '../assets/svgs/shelve.svg';
import Cart from '../assets/svgs/cart.svg';
import { cartItemsVar, showCartVar } from '../caches/general';
import { useNavigate } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';
import SearchInputSmall from './SearchInputSmall';

function Header() {
  const navigate = useNavigate();
  const cartItems = useReactiveVar(cartItemsVar);

  const totalCount = () => {
    if (cartItems?.length < 1) return 0;
    return cartItems?.reduce((acc, cur) => acc + cur?.count, 0);
  };

  return (
    <header className="header">
      <div className="content">
        <div className="w-full flex justify-between items-center py-5">
          <a href="/">
            <img src={Logo} alt="Quidax books logo" width="170" />
          </a>

          <SearchInput />

          <div className="header-right flex items-center">
            <SearchInputSmall />
            <div className="shelve">
              <img src={Shelve} alt="Shelve" className="pointer" width="23" onClick={() => navigate('/')} />
            </div>
            <div className="relative pointer" role="presentation" onClick={() => showCartVar(true)}>
              <img src={Cart} alt="Cart" width="25" />
              {totalCount() > 0 && (
                <span className="cart-counter absolute flex justify-center items-center">
                  {totalCount()}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
