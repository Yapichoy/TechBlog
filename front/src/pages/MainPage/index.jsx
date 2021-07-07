import { useEffect } from "react";
import NewsItem from "../../components/NewsItem";
import {connect} from "react-redux";
import './MainPage.scss';
import {getPostsThunkCreator} from '../../redux/reducers/postsReducer';
const MainPage = ({posts, getPosts}) => {
  useEffect(()=>{
    getPosts();
  }, []);
  return <section className="main">
      { posts.map(p => <NewsItem {...p}  key={p.id}/>)}
  </section>

}
const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
}
export default connect(mapStateToProps, {
  getPosts: getPostsThunkCreator,
  
})(MainPage);