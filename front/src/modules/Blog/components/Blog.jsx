import './Blog.scss';
import { NavLink} from 'react-router-dom';
import { useEffect } from 'react';
import format from 'date-fns/format'
import rulocale from 'date-fns/locale/ru';

const Blog = ({id, title, description, preview, text, updatedAt, getPost, match}) => {
    useEffect(()=>{
      getPost(match.params.id);
    }, []);
    return <div className="blog">
        <meta property="og:description" content={description}></meta>
        <div className="blog__head">
            <img src={`${process.env.REACT_APP_SERVER_NAME}${preview}`} alt={title} />
            <div className="blog__head--opacity"></div>
            <div className="blog__head--header">
              {title}
            </div>
            <div className="blog__head--text" >
              {description}
            </div>
        </div>
        <div className="blog__top">
          <div className="blog__top--date"> {updatedAt && format(new Date(updatedAt), 'dd/MM/yyyy H:m', {addSuffix: true, locale: rulocale})}</div>
          <div className="blog__top--categories">
            <NavLink to="#">Apple</NavLink> / <NavLink to="#">Google</NavLink> / <NavLink to="#">IOS</NavLink>
          </div> 
        </div>
        <div className="blog__body" dangerouslySetInnerHTML={{ __html: text}} />
    </div>
  }

export default Blog;