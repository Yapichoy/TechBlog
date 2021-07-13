import { NavLink } from 'react-router-dom';
const Meta= ({slug, name, index, length}) => {

    return <div>
          <NavLink to={`/${slug}`}>{name}</NavLink> {index !== length-1 ? '/' : ''}
        </div>
  }

export default Meta;