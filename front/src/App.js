
import './App.scss';
import {Route} from "react-router-dom";
import { MainPage, NewsPage } from './pages';
import {Header, Footer} from "./components";
import Safe from "react-safe"

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header/>
        <div className="container">
          <Route exact path={['/']} component={MainPage}/>
          <Route exact path={['/:meta']} component={MainPage}/>
          <Route exact path={['/post/:id']} component={NewsPage}/>
        </div>
        {/*<Safe.script async src="https://www.googletagmanager.com/gtag/js?id=G-S2QF44SPYR"></Safe.script>
        <Safe.script>{
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          console.log('is working');
          gtag('config', 'G-S2QF44SPYR');`
        }
      </Safe.script>*/}
        <Footer/>
      </div>
    </div>
  );
}

export default App;
