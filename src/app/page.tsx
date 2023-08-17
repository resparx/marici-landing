import CTA from "@/components/cta";
import Expertise from "@/components/expertise";
import Navbar from "@/components/navbar";
import OurServices from "@/components/ourServices";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 bg-white">
        <Navbar />
        <OurServices />
        <CTA />
        <Expertise />
    </main>
  )
}
