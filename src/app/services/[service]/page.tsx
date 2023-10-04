import Navbar from "@/components/navbar"
import Banner from "../../../components/services/banner"
import AllServices from "@/components/services/allServices"
import Details from "@/components/services/details"
import Footer from "@/components/footer"



const Services = () => {
    return <div className="flex flex-col bg-white relative gap-16">
        <Navbar/>
        <Banner />
        <AllServices />
        <Footer/>
    </div>
}

export default Services