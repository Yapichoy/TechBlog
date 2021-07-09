import { NavLink } from 'react-router-dom';
import './Header.scss';
const Header = () => {

    return <div className="header">
        <div className="header__logo">
          <NavLink to="/"><img src={process.env.PUBLIC_URL + '/logo.svg'} alt="" /></NavLink>
        </div>

        <div className="search">
          <input type="text" id="search" placeholder="Поиск" className="search__input" />
          <label htmlFor="search"><img src={process.env.PUBLIC_URL + '/search-icon.png'} className="search__icon" alt="" /></label>
        </div>
    </div>
  
  }

export default Header;