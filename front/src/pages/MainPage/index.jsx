import { useEffect } from "react";
import NewsItem from "../../components/NewsItem";
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { connect } from 'react-redux';
import './MainPage.scss';
import {getPostsThunkCreator} from '../../redux/reducers/postsReducer';
import { searchEndActionCreator } from "../../redux/reducers/headerReducer";

const MainPage = ({posts, getPosts, match, isSearch, btnClicked , searchStr, searchEnd}) => {
  useEffect(()=>{
    const meta = match?.params?.meta || null;
    let search = '';
    if (isSearch) {
      search = searchStr;
      searchEnd();
    }
    getPosts({meta, search});
  }, [btnClicked]);
  return <section className="main">
      { posts.map(p => <NewsItem {...p}  key={p.id}/>)}
  </section>

}
const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    isSearch: state.header.search,
    searchStr: state.header.searchStr,
    btnClicked: state.header.btnClicked,
  }
}
export default compose(connect(mapStateToProps, {
  getPosts: getPostsThunkCreator,
  searchEnd: searchEndActionCreator
  
}), withRouter)(MainPage);