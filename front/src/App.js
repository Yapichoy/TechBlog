
import './App.scss';
import {Route} from "react-router-dom";
import { MainPage, NewsPage } from './pages';
import {Header, Footer} from "./components";

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header/>
        <div className="container">
          <Route exact path={['/']} component={MainPage}/>
          <Route exact path={['/post/:id']} component={NewsPage}/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
