import React from "react"

import Policy from "../components/Layout//Policy/Policy"
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
            <Sliders />
            <Categories />
            <Products />
            <Campaigns />
            <Products />
            <Blogs />
            <Brands />
            <CampaignSingle />
            <Policy />
        </React.Fragment>


    )
}

export default HomePage
