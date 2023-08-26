import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import "./css/CSS_flashitems.css"
import "./css/CSS_mainnav-bar.css"
import "./css/Responsive/CSS_responsive.css"
import { useState, useEffect } from 'react';
import decode from 'jwt-decode';
import HeaderBanners from './components/HeaderBanners';
import MainNavBar from './components/Navbar/MainNavBar';
import CategoryBar from './components/Navbar/CategoryBar';
import BodyHeader from './components/BodyContent/BodyHeader';
import BodySales from './components/BodyContent/BodySales';
import BodyCategories from './components/BodyContent/BodyCategories';
import Footer from "./components/Footer/Footer.jsx"
import Recipes from './components/BodyContent/Recipes';
import Main from './components/Main/Main';

// https://ninetheme.com/themes/crisop/

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [info, setInfo] = useState()

  const decodeToken = () => {

    if (user !== null) {
      // setInfo(decode(user))
      // console.log(decode(user.token))

    }
  }

  useEffect(() => {
    if (localStorage.getItem("user") !== "" || localStorage.getItem("user") !== undefined) {
      decodeToken()

    }
  }, [])

  return (
    <div className="App">

      <div className="mainnav-bar">
        <MainNavBar info={info} ></MainNavBar>
      </div>
      {/* <CategoryBar></CategoryBar> */}

      <Main></Main>

      <BodyCategories></BodyCategories>
      <BodySales></BodySales>
      <Recipes></Recipes>
      <Footer></Footer>

    </div>
  );
}

export default App;
