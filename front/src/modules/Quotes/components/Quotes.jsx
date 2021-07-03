import {useEffect} from 'react';

const Quotes = ({quotes, getQuotes}) => {
  useEffect(()=>{
    getQuotes();
  }, []);
    return <div className="quotes">
     
    </div>
  
  }

export default Quotes;