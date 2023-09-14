import RenderIcon from "@/components/common/renderIcon";
import classNames from "classnames";
import Image from "next/image";

const Details = () => {
  return (
    <div className="flex flex-col mt-24 gap-40">
      <DetailsType />
      <DetailsType reverse />
    </div>
  );
};

const Pill = ({title}: {title: string}) => {
    return <div className="flex items-center justify-center rounded-full bg-sky-300 p-3 w-fit">
        <p className="text-sky-900 text-xs font-semibold">
            {title}
        </p>
    </div>
}

const DetailsType = ({reverse}: {reverse?: boolean}) => {
  const Point = ({
    iconProps = {
      height: 20,
      className: "mt-1"
    }
  }) => {
    return (
      <div className={"flex gap-4 items-start"}>
        <RenderIcon {...iconProps} />
        <div className="flex flex-col gap-4 items-start">
        <p className="text-slate-800 text-lg font-semibold">Tempor veniam aute duis</p>
        <p className="text-slate-800">Tempor veniam aute duis non eiusmod reprehenderit sit cupidatat.</p>
        </div>
      </div>
    );
  };
  return (
    <div className={classNames("flex w-3/4 mx-auto gap-16", {
      "flex-row-reverse": reverse
    })}>
      <div className="w-1/2 relative overflow-hidden rounded-2xl">
        <img className="rounded-2xl" src="https://placehold.co/600x400/sky/white" />
      </div>
      <div className="flex flex-col w-1/2 gap-4">
        <Pill title="Nostrud ea" />
        <p className="text-slate-900 font-bold text-3xl">Nostrud ea ipsum.</p>
        <p className="text-slate-700 font-medium text-lg w-1/2 mb-8">
          Et nostrud esse veniam in consequat deserunt aute elit adipisicing
          consectetur duis incididunt. Occaecat esse enim ad irure amet
          proident do elit proident ex.
        </p>
        <div className="flex flex-col gap-8">
          <Point />
          <Point />
          <Point />
        </div>
      </div>
    </div>
  );
};

export default Details;
