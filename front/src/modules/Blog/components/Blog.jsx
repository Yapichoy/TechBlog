import './Blog.scss';
import { NavLink, useHistory } from 'react-router-dom';

const Form = (props) => {

    return <div className="blog">
        <meta property="og:description" content="Разработчики компании нередко встраивают в фирменные приложения неочевидные функции вроде мини-игры с динозавром в Chrome. Не стал исключением и мобильный клиент Google для iOS — с его помощью пользователи гаджетов Apple теперь могут зарубиться в оригинальную модификацию пинбола."></meta>
        <div className="blog__head">
            <img src={process.env.PUBLIC_URL + "/Cyy6U1wxO1z18SsdgEa6eQwRm5VRsJuKib9UY0kE7jDFt.jpg"} alt="" />
            <div className="blog__head--opacity"></div>
            <div className="blog__head--header">
              В приложении Google для iOS появилась игра-пасхалка
            </div>
            <div className="blog__head--text">
            Разработчики компании нередко встраивают в фирменные приложения неочевидные функции вроде мини-игры с динозавром в Chrome. Не стал исключением и мобильный клиент Google для iOS — с его помощью пользователи гаджетов Apple теперь могут зарубиться в оригинальную модификацию пинбола.
            </div>
        </div>
        <div className="blog__top">
          <div className="blog__top--date">02.07.21</div>
          <div className="blog__top--categories">
            <NavLink to="#">Apple</NavLink> / <NavLink to="#">Google</NavLink> / <NavLink to="#">IOS</NavLink>
          </div> 
        </div>
        <div className="blog__body">
          <p>Для активации игры необходимо запустить приложение Google и перейти в панель «Вкладки». Затем следует закрыть все открытые вкладки и просто немного подождать. Спустя несколько секунду внизу экрана начнут появляться разноцветные фигуры. Останется лишь сделать на них свайп, чтобы запустить оригинальный гибрид классического пинбола и Breakout.</p>
          <img src={process.env.PUBLIC_URL + "/Cyy6GLC5Q8Fghz2xOsgkJco9vkhmN.jpg"} alt="" />
          <p>В игре много уровней, каждый из которых добавляет новые фигуры и бонусы — дополнительные попытки, увеличение размера шарика или появление второго. Пасхалка доступна даже в автономном режиме и поможет скоротать время, если на смартфоне больше нет других игр.</p>


        </div>
    </div>
  }

export default Form;