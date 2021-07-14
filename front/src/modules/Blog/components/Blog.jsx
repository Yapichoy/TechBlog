import './Blog.scss';
import { NavLink} from 'react-router-dom';
import { useEffect } from 'react';
import { dateTimeFormat } from '../../../helper';
import { Meta } from '../../../components';

const Blog = ({id, title, description, preview, text, updatedAt, metas, getPost, match}) => {
    useEffect(()=>{
      getPost(match.params.id);
    }, []);
    return <div className="blog">
        <meta property="og:title" content={`GeekBreak.ru - ${title}`}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={`${process.env.REACT_APP_SERVER_NAME}${preview}`}/>
        <meta property="og:url" content={`${process.env.REACT_APP_HOST}/post/${id}`}/>
        <div className="blog__head">
            <img src={`${process.env.REACT_APP_SERVER_NAME}${preview}`} alt={title} />
            <div className="blog__head--opacity"></div>
            <h1 className="blog__head--header">
              {title}
            </h1>
            <div className="blog__head--text" >
              {description}
            </div>
        </div>
        <div className="blog__top">
          <div className="blog__top--date"> {dateTimeFormat(updatedAt)}</div>
          <div className="blog__top--categories">
            { metas?.map((m, index) => <Meta {...m} key={m.slug} index={index} length={metas.length}/>)}
          </div> 
        </div>
        <div className="blog__body" dangerouslySetInnerHTML={{ __html: text}} />
    </div>
  }

export default Blog;