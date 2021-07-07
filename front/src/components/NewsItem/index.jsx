import './NewsItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faHeart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


const Quote = ({title, description, preview, text, updatedAt}) => {


    return <NavLink to='/post' className="newsItem" title="В приложении Google для iOS появилась игра-пасхалка" >
      <div className="newsItem__picture"><img src={preview} alt={title} /></div>
      <div className="newsItem__information">
        <div>
          <div className="newsItem__header">
            {title}
          </div>
          <div className="newsItem__description">
            {description}
          </div>
        </div>
        <div className="newsItem__bottom">
          <div className="newsItem__bottom--date">
            02.07.21
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