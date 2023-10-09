const CTA = () => {
  return (
    <section className="my-16 w-full px-4 sm:px-52">
      <div className="shadow-xl relative py-8 sm:py-20 px-8 sm:px-40 flex justify-between align-middle bg-gradient-to-r from-slate-700 to-slate-900 rounded-2xl">
        <div className="flex flex-col gap-4 w-full sm:w-1/2">
          <p className="text-xl sm:text-4xl font-bold text-white">
            The fastest way from idea to live site. Period.
          </p>
          <p className="text-md sm:text-xl font-medium text-gray-400">
            Flex is a Small SaaS Business. Flex isn’t a traditional company.
          </p>
          <div className="flex items-center gap-6">
            <button className="px-7 py-4 bg-sky-500 rounded-xl h-fit">
              Get started
            </button>
            <button className="px-7 py-4 bg-gray-100 rounded-xl h-fit text-gray-800">
              Learn more
            </button>
          </div>
        </div>
        <img className="hidden sm:block absolute w-[20%] top-[40px] -right-[60px]" src="/static/images/landing/logo-transparent.png" />
      </div>
    </section>
  );
};

export default CTA;
