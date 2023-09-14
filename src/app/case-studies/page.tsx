  import List from "@/components/caseStudies/list";
import Commonbanner from "@/components/common/commonBanner";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const CaseStudies = () => {
  return (
    <div className="bg-white">
      <Navbar/>
      <Commonbanner title="Case studies" image="https://i.imgur.com/ewiPRCs.jpg" subTitle="Non esse nostrud non sint exercitation minim Lorem ut." />
      <List />
      <Footer/>
    </div>
  );
};

export default CaseStudies;
