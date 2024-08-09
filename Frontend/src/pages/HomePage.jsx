import React from "react"
import Footer from "../components/Layout/Footer"
import Header from "../components/Layout/Header"
import Policy from "../components/Layout/Policy"
import Products from "../components/Products/Products"
import Sliders from "../components/Slider/Sliders"
import Categories from "../components/Categories/Categories"
import Campaigns from "../components/Campagins/Campaigns"
import Blogs from "../components/Blogs/Blogs"
import Brands from "../components/Brands/Brands"
import CampaignSingle from "../components/CampaignSingle/CampaignSingle"



const HomePage = () => {
    return (
        <React.Fragment>
            <Header />
            <Sliders />
            <Categories />
            <Products />
            <Campaigns />
            <Products />
            <Blogs />
            <Brands />
            <CampaignSingle />
            <Policy />
            <Footer />
        </React.Fragment>


    )
}

export default HomePage
