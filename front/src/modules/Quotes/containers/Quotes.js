import Quotes from '../components/Quotes';
import {connect} from "react-redux";
import { getQuotesThunkCreator } from '../../../redux/reducers/quotesReducer';

let mapStateToProps = (state) => {
    return {
      quotes: state.quotes.quotes,
    }
  }

export default  connect(mapStateToProps, {
  getQuotes: getQuotesThunkCreator
})(Quotes);