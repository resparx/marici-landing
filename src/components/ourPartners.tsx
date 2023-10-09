import SectionPill from "./common/sectionPill";

const OurPartners = () => {
  return (
    <section className="flex flex-col w-full px-4 sm:px-0 sm:w-4/5 items-center py-20 gap-8">
      <SectionPill title="Our partners" />
      <div className="w-full flex justify-around flex-wrap sm:flex-nowrap">
        <img className="rounded-xl mb-4 sm:mb-0" src="https://placehold.co/140x50" />
        <img className="rounded-xl mb-4 sm:mb-0" src="https://placehold.co/140x50" />
        <img className="rounded-xl mb-4 sm:mb-0" src="https://placehold.co/140x50" />
        <img className="rounded-xl mb-4 sm:mb-0" src="https://placehold.co/140x50" />
        <img className="rounded-xl mb-4 sm:mb-0" src="https://placehold.co/140x50" />
        <img className="rounded-xl mb-4 sm:mb-0" src="https://placehold.co/140x50" />
      </div>
    </section>
  );
};

export default OurPartners
