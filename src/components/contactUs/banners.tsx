import Link from "next/link";
import RenderIcon from "../common/renderIcon";
import classNames from "classnames";

const Mode = ({
  heading,
  content,
  linkText,
  href,
  iconType,
}: {
  heading: string;
  content: string;
  linkText: string;
  href: string;
  iconType: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-lg text-gray-700 font-semibold">{heading}</p>
      <p className="text-base text-gray-700 w-[80%]">{content}</p>
      <div className="flex gap-3 items-center">
        <RenderIcon className="fill-green-600" type={iconType} />{" "}
        <Link className="text-green-600 font-semibold" href={href}>
          {linkText}
        </Link>
      </div>
    </div>
  );
};

const Banner = () => {
  const inputClasses =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white h-14 w-full";
  return (
    <div className="flex flex-col bg-white pt-40 px-48 justify-between">
      <p className="text-5xl font-semibold text-gray-700 mb-20">Get in touch</p>
      <div className="flex justify-between">
        <div className="flex flex-col w-[50%]">
          <p className="text-lg font-semibold text-gray-700 mb-2">
            Send a message
          </p>
          <p className="text-base text-gray-700 w-4/5 mb-8">
            Ex nulla sunt cupidatat mollit dolor excepteur sunt sint laboris
            exercitation sint irure.
          </p>
          <form className="flex flex-col gap-5 w-4/5">
            <div className="flex gap-5">
              <div className="w-full">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className={inputClasses}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className={inputClasses}
                  required
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-full">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="first_name"
                  className={inputClasses}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900   "
                >
                  Email
                </label>
                <input
                  type="text"
                  id="first_name"
                  className={inputClasses}
                  required
                />
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900   "
              >
                Message
              </label>
              <textarea className={classNames(`${inputClasses} h-64`)} />
            </div>

            <button className="text-base font-semibold text-white w-fit bg-green-500 py-3 px-5 rounded-lg">
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-16 w-[50%]">
          <Mode
            heading="Call us"
            content="Velit elit laborum elit deserunt mollit laboris. laborum elit deserunt mollitVelit elit laborum elit deserunt mollit laboris."
            linkText="0480-987-987"
            iconType="PHONE"
            href={""}
          />
          <Mode
            heading="Email us"
            content="Velit elit laborum elit deserunt mollit laboris. laborum elit deserunt mollitVelit elit laborum elit deserunt mollit laboris."
            linkText="support@maricisolutions.com"
            iconType="EMAIL"
            href={""}
          />
          <Mode
            heading="Visit us"
            content="Velit elit laborum elit deserunt mollit laboris. laborum elit deserunt mollitVelit elit laborum elit deserunt mollit laboris."
            linkText="https://maricisolution.com"
            iconType="WEB"
            href={""}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
