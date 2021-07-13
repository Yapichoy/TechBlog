import { NavLink } from 'react-router-dom';
import './Header.scss';
import { connect } from 'react-redux';
import { searchTypingActionCreator, searchActionCreator, btnClickActionCreator } from '../../redux/reducers/headerReducer';
import { useHistory } from 'react-router-dom';

const Header = ({searchStr, searchTyping, search}) => {
    const history = useHistory();
    const onChange = (e) => {
      searchTyping(e.target.value)
    }
    const onSubmit = (e) => {
      search();
      history.push('/');
    }

    return <div className="header">
        <div className="header__logo">
          <NavLink to="/"><img src={process.env.PUBLIC_URL + '/logo.svg'} alt="" /></NavLink>
        </div>

        <div className="search">
          <input type="text" id="search" value={searchStr} onChange={onChange} placeholder="Поиск" className="search__input" />
          <label htmlFor="search" onClick={onSubmit}><img src={process.env.PUBLIC_URL + '/search-icon.png'} className="search__icon" alt="" /></label>
        </div>
    </div>
  
  }

const mapStateToProps = (state) => {
  return {
    searchStr: state.header.searchStr,
    search: state.header.search,
  }
}
export default connect(mapStateToProps, {
  searchTyping: searchTypingActionCreator,
  search: searchActionCreator
})(Header);