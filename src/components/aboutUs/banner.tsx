const Tile = () => {
  return (
    <div className="h-[400px] w-[240px] relative rounded-lg overflow-hidden">
      <img src="https://placehold.co/240x400/darkcyan/darkcyan" />
      <div className="flex flex-col bg-gradient-to-t from-slate-900 to-transparent absolute top-0 left-0 h-full p-4">
        <p className="text-lg font-semibold mt-auto">
          Nisi dolor do dolore adipisicing ex non sit
        </p>
        <p className="mt-5 text-sm font-semibold">
          Laboris officia tempor do velit anim in pariatur laborum officia. Sunt
          dolor id quis mollit irure ex est Lorem nisi et non. Cupidatat in ut
          sint nisi adipisicing ad culpa. Pariatur eu velit do eiusmod fugiat
          deserunt reprehenderit deserunt aute. Non quis tempor ex anim do
          pariatur magna.
        </p>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <section className="flex flex-col w-screen items-center px-44 pt-32">
      <p className="text-5xl font-semibold text-center mb-20">About us</p>
      <p className="text-4xl font-semibold text-center mb-8">
        We Are Building An Transparent Digital Economy
      </p>
      <p className="w-[60%] text-xl font-semibold text-center mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="flex gap-12 [&>*:nth-child(even)]:mt-14">
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
    </section>
  );
};

export default Banner;
