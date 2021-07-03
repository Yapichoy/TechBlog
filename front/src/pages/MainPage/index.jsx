import { useEffect } from "react";
import NewsItem from "../../components/NewsItem";
import { connectThunkCreator,  setFormDataActionCreator} from "../../redux/reducers/formReducer";
import {connect} from "react-redux";
import './MainPage.scss';

const MainPage = ({connection, setFormData}) => {
  useEffect(()=>{
    //connection();
  }, []);
  return <section className="main">
      <NewsItem />
      <NewsItem />
  </section>

}
const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps, {
  connection: connectThunkCreator,
  setFormData: setFormDataActionCreator
  
})(MainPage);