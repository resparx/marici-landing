import Navbar from "@/components/navbar"
import Banner from "@/components/aboutUs/banner"
import Content from "@/components/aboutUs/contents"
import Footer from "@/components/footer"

const AboutUs = () => {
    return <div className="flex flex-col bg-white">
        <Navbar/>
        <Banner/>
        <Content />
        <Footer />
    </div>
}

export default AboutUs