import Blog from '../components/Blog';
import { getPostThunkCreator } from '../../../redux/reducers/postReducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        ...state.post.post
    }
  }
  export default compose(
    connect(mapStateToProps, {
        getPost: getPostThunkCreator,
    }),
    withRouter
  )(Blog);