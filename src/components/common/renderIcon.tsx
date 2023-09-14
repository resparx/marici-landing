import BarsStaggered from "@/icons/bars-staggered";
import Chip from "@/icons/chip";
import Cloud from "@/icons/cloud";
import Cube from "@/icons/cube";
import Email from "@/icons/email";
import FileContract from "@/icons/file-contract";
import HandPointUp from "@/icons/hand-poit-up";
import Internet from "@/icons/internet";
import ListCheck from "@/icons/list-check";
import Paint from "@/icons/paint";
import Phone from "@/icons/phone";
import Sap from "@/icons/sap";
import Selenium from "@/icons/selenium";
import ShareNodes from "@/icons/share-nodes";
import Stamp from "@/icons/stamp";
import Tosca from "@/icons/tosca";

const RenderIcon = ({ type, ...rest }: { type?: string; className: string; }) => {
  switch (type) {
    case "PHONE":
      return <Phone {...rest} />;
    case "EMAIL":
      return <Email {...rest} />;
    case "WEB":
      return <Internet {...rest} />;
    case "CHIP":
      return <Chip {...rest} />;
    case "LIST_CHECKED":
      return <ListCheck {...rest} />;
    case "HAND_POINT_UP":
      return <HandPointUp {...rest} />;
    case "FILE_CONTRACT":
      return <FileContract {...rest} />;
    case "STAMP":
      return <Stamp {...rest} />;
    case "SAP":
      return <Sap {...rest} />;
    case "CUBE":
      return <Cube {...rest} />;
    case "CLOUD":
      return <Cloud {...rest} />;
    case "SHARE_NODES":
      return <ShareNodes {...rest} />;
    case "SELENIUM":
      return <Selenium {...rest} />
    case "TOSCA":
      return <Tosca {...rest} />
    case "PAINT":
      return <Paint {...rest} />
    default:
      return <BarsStaggered {...rest} />;
  }
};

export default RenderIcon;
