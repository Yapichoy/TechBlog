import './NewsItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faHeart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import format from 'date-fns/format'
import rulocale from 'date-fns/locale/ru';

const Quote = ({id, title, descriptionPreview, preview, text, updatedAt}) => {

    return <NavLink to={`/post/${id}`} className="newsItem" title="В приложении Google для iOS появилась игра-пасхалка" >
      <div className="newsItem__picture"><img src={`${process.env.REACT_APP_SERVER_NAME}${preview}`} alt={title} /></div>
      <div className="newsItem__information">
        <div>
          <div className="newsItem__header">
            {title}
          </div>
          <div className="newsItem__description">
            {descriptionPreview}
          </div>
        </div>
        <div className="newsItem__bottom">
          <div className="newsItem__bottom--date">
            {format(new Date(updatedAt),'dd/MM/yyyy H:m', {addSuffix: true, locale: rulocale})}
          </div>
          <div className="newsItem__bottom__info">
            {/* <div className="newsItem__bottom__info--likes"><FontAwesomeIcon icon={ faHeart }/> 20</div> */}
            {/* <div className="newsItem__bottom__info--comments"><FontAwesomeIcon icon={ faComments }/> 3</div> */}
          </div>
        </div>
      </div>
    </NavLink>
  
  }

export default Quote;