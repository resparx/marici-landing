import SectionPill from "./common/sectionPill";

const OurPartners = () => {
  return (
    <section className="flex flex-col w-4/5 items-center py-20 gap-8">
      <SectionPill title="Our partners" />
      <div className="w-full flex justify-around">
        <img className="rounded-xl" src="https://placehold.co/140x50" />
        <img className="rounded-xl" src="https://placehold.co/140x50" />
        <img className="rounded-xl" src="https://placehold.co/140x50" />
        <img className="rounded-xl" src="https://placehold.co/140x50" />
        <img className="rounded-xl" src="https://placehold.co/140x50" />
        <img className="rounded-xl" src="https://placehold.co/140x50" />
      </div>
    </section>
  );
};

export default OurPartners
