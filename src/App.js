import './App.css';
import Prenavbar from './components/prenavbar';
import Navbar from './components/navbar.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Slider from './components/slider.js'
import pkg from "./data/data.json"
import Offers from './components/offers.js'
import Heading from './components/heading.js'
import StarProduct from './components/starproducts.js'
import HotAccessoriesMenu from './components/hotaccessoriesmenu.js'
import HotAccessories from './components/hotaccessories.js';
import ProductReview from './components/productreview.js'
import Videos from './components/videos.js'
import Thepressslider from './components/pressslider.js'
import Footer from './components/footer.js'
import NavOptions from "./components/NavOptions.js"

function App() {
  const banner=pkg.banner;
  return ( 
    <Router>
      <Prenavbar/>

      <Navbar/>
      <NavOptions miPhones={pkg.miPhones} redmiPhones={pkg.redmiPhones} tv={pkg.tv} laptop={pkg.laptop} fitnessAndLifeStyle={pkg.fitnessAndLifeStyle} home={pkg.home} audio={pkg.audio}  accessories={pkg.accessories}/>


      <Slider start={banner.start}/>

      <Offers offer={pkg.offer}/>

      <Heading text="STAR PRODUCTS"/>
      <StarProduct StarProduct={pkg.starProduct}/>

      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu/>
      <Routes>
      <Route exact path="/musicStore"  
        element = {<HotAccessories music = {pkg.hotAccessories.music} musicCover = {pkg.hotAccessoriesCover.music}/>}/>
      <Route exact path="/smartDevices"  
        element = {<HotAccessories smartdevice = {pkg.hotAccessories.smartDevice} smartdevicecover = {pkg.hotAccessoriesCover.smartDevice}/>}/>
      <Route exact path="/home"  
        element = {<HotAccessories home = {pkg.hotAccessories.home} homecover = {pkg.hotAccessoriesCover.home}/>}/>
      <Route exact path="/lifestyle"  
        element = {<HotAccessories lifestyle = {pkg.hotAccessories.lifeStyle} lifestylecover = {pkg.hotAccessoriesCover.lifeStyle}/>}/>
      <Route exact path="/mobileAccessories"  
        element = {<HotAccessories moblieaccessories = {pkg.hotAccessories.mobileAccessories} moblieaccessoriescover = {pkg.hotAccessoriesCover.mobileAccessories}/>}/>
      </Routes>

      <Heading text="PRODUCT REVIEWS"/>
      <ProductReview productreview={pkg.productReviews}/>

      <Heading text="VIDEOS"/>
      <Videos videos={pkg.videos}/>

      <Heading text="IN THE PRESS"/>
      <Thepressslider banner={pkg.banner}/> 

      <Footer footer={pkg.footer}/>

    </Router>
  );
}

export default App;
