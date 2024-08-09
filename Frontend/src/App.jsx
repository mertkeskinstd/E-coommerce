import Categories from "./components/Categories/Categories"
import Footer from "./components/Layout/Footer"
import Header from "./components/Layout/Header"
import Policy from "./components/Layout/Policy"
import Products from "./components/Products/Products"
import Sliders from "./components/Slider/Sliders"
import Campaigns from "./components/Campagins/Campaigns"
import "./App.css"
import Blogs from "./components/Blogs/Blogs"



const App = () => {
  return (
    <div>
        <Header/>
        <Sliders/>
        <Categories/>
        <Products/>
        <Campaigns/>
        <Products/>
        <Blogs/>
        <Policy/>
        <Footer/>
    </div>
  )
}

export default App
