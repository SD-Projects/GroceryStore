import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import "./css/CSS_flashitems.css"
import "./css/CSS_mainnav-bar.css"
import { useState, useEffect } from 'react';
import decode from 'jwt-decode';
import HeaderBanners from './components/HeaderBanners';
import MainNavBar from './components/Navbar/MainNavBar';
import CategoryBar from './components/Navbar/CategoryBar';
import BodyHeader from './components/BodyContent/BodyHeader';
import BodySales from './components/BodyContent/BodySales';
import BodyCategories from './components/BodyContent/BodyCategories';
import Footer from "./components/Footer/Footer.js"

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('auth-token')))
  console.log(user)

  useEffect(() => {

    const token = user?.token

    if (token) {
      const decodedInfo = decode(token)
      console.log(token)
    }
    console.log(token)

    setUser(JSON.parse(localStorage.getItem('auth-token')));
  }, [])


  return (
    <div className="App">

      <div className="mainnav-bar">
        <MainNavBar ></MainNavBar>
      </div>
      {/* <CategoryBar></CategoryBar> */}

      <div class="flash-items-container">
        <HeaderBanners></HeaderBanners>
      </div>

      <div className="header-body-container">
        <BodyHeader></BodyHeader>
      </div>

      <div>
        <BodyCategories></BodyCategories>
      </div>

      <div>
        <BodySales></BodySales>
      </div>

      <div>
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
