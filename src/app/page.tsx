import Banner from "@/components/banner";
import CaseStudies from "@/components/caseStudies";
import CTA from "@/components/cta";
import Expertise from "@/components/expertise";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import OurPartners from "@/components/ourPartners";
import OurServices from "@/components/ourServices";
import Social from "@/components/social";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 bg-white">
        <Navbar />
        <Banner/>
        <OurServices />
        <Expertise />
        <CTA />
        <CaseStudies />
        <OurPartners />
        <Social />
        <Footer />
    </main>
  )
}
