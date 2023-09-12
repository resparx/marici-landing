import Banner from "@/components/contactUs/banners"
import FAQ from "@/components/contactUs/faq"
import MapView from "@/components/contactUs/mapView"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"


const AboutUs = () => {
    return <div className="bg-white">
        <Navbar/>   
        <Banner />
        {/* <MapView /> */}
        <FAQ/>
        <Footer/>
    </div>
}

export default AboutUs