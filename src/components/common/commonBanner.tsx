const Commonbanner = ({
  image,
  title,
  subTitle,
}: {
  image: string;
  title: string;
  subTitle: string;
}) => {
  return (
    <section
      className="flex flex-col gap-8 justify-center items-start h-[400px] sm:h-[600px] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="w-full h-full pb-4 sm:pb-32 px-4 sm:px-52 bg-gradient-to-t from-slate-950 to-slate-500 flex justify-end flex-col gap-4">
        <h1 className="text-white font-bold text-xl sm:text-4xl w-full sm:w-[40%]">{title}</h1>
        <p className="text-white w-full sm:w-1/2 text-sm sm:text-lg">{subTitle}</p>
      </div>
    </section>
  );
};

export default Commonbanner;
