import BarsStaggered from "@/icons/bars-staggered";
import Email from "@/icons/email";
import Internet from "@/icons/internet";
import Phone from "@/icons/phone";

const RenderIcon = ({ type, ...rest }: { type?: string }) => {
  switch (type) {
    case 'PHONE':
      return <Phone {...rest} />;
    case 'EMAIL':
      return <Email {...rest} />;
    case 'WEB':
      return <Internet {...rest} />;
    default:
      return <BarsStaggered {...rest} />;
  }
};

export default RenderIcon;
