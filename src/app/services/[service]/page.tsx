import Navbar from "@/components/navbar"
import Banner from "../../../components/services/components/banner"
import AllServices from "@/components/services/components/allServices"
import Details from "@/components/services/components/details"



const Services = () => {
    return <div className="flex flex-col bg-white relative gap-16">
        <Navbar/>
        <Banner />
        <AllServices />
        <Details />
    </div>
}

export default Services