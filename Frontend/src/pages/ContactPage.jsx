import { Fragment } from "react"
import Footer from "../components/Layout/Footer"
import Header from "../components/Layout/Header"
import Policy from "../components/Layout/Policy"
import Contact from "../components/Contact/Contact"


const ContactPage = () => {
    return (
        <Fragment>
            <Header />
            <Contact />
            <Policy />
            <Footer />
        </Fragment>
    )
}

export default ContactPage
