import SectionPill from "./common/sectionPill";

export const CaseStudy = ({
  img,
  title,
  content,
}: {
  img: string;
  title: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col gap-4 w-1/4 mb-24">
      <img className="rounded-xl" src={img} />
      <p className="text-xl font-bold text-white">{title}</p>
      <p className="text-base font-medium text-gray-500" >{content}</p>
    </div>
  );
};

const CaseStudies = () => {
  return (
    <section className="w-full px-52 py-28 flex flex-col gap-16">
      <div className="flex flex-col gap-4 w-1/2">
        <SectionPill title="Case studies" />
        <p className="text-5xl font-bold text-slate-900">
          Gain more insight into how people use your
        </p>
        <p className="text-xl font-medium text-gray-500 mt-2">
          With our integrated CRM, project management, collaboration and
          invoicing capabilities, you can manage your business in one secure
          platform.
        </p>
      </div>
      <div className="flex justify-between flex-wrap gap-14">
        <CaseStudy
          img="https://placehold.co/300x200.png"
          title="Measure your performance"
          content="Stay connected with your team and make quick decisions wherever you are."
        />
        <CaseStudy
          img="https://placehold.co/300x200.png"
          title="Custom analytics"
          content="Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place."
        />
        <CaseStudy
          img="https://placehold.co/300x200.png"
          title="Team Management"
          content="Our calendar lets you know what is happening with customer and projects so you"
        />
        <CaseStudy
          img="https://placehold.co/300x200.png"
          title="Build your website"
          content="A tool that lets you build a dream website even if you know nothing about web design or programming."
        />
        <CaseStudy
          img="https://placehold.co/300x200.png"
          title="Connect multiple apps"
          content="The first business platform to bring together all of your products from one place."
        />
        <CaseStudy
          img="https://placehold.co/300x200.png"
          title="Easy setup"
          content="SEnd to End Business Platform, Sales Management, Marketing Automation, Help Desk"
        />
      </div>
    </section>
  );
};

export default CaseStudies;
