import ArrowRight from "@/icons/arrow-right";
import BarsStaggered from "@/icons/bars-staggered";
import Bolt from "@/icons/bolt";
import BugSlash from "@/icons/bugSlash";
import Chip from "@/icons/chip";
import Cloud from "@/icons/cloud";
import Cube from "@/icons/cube";
import Email from "@/icons/email";
import FileContract from "@/icons/file-contract";
import Globe from "@/icons/globe";
import HandPointUp from "@/icons/hand-poit-up";
import HandShake from "@/icons/handShake";
import Heart from "@/icons/heart";
import Internet from "@/icons/internet";
import ListCheck from "@/icons/list-check";
import Paint from "@/icons/paint";
import Phone from "@/icons/phone";
import Right from "@/icons/right";
import Sap from "@/icons/sap";
import Selenium from "@/icons/selenium";
import ShareNodes from "@/icons/share-nodes";
import Stamp from "@/icons/stamp";
import Tosca from "@/icons/tosca";
import Vest from "@/icons/vest";

const RenderIcon = ({
  type,
  ...rest
}: {
  type?: string;
  height?: number | string;
  className?: string;
}) => {
  switch (type) {
    case "PHONE":
      return <Phone {...rest} />;
    case "EMAIL":
      return <Email {...rest} />;
    case "WEB":
      return <Internet {...rest} />;
    case "CHIP":
      return <Chip {...rest} />;
    case "HEART":
      return <Heart {...rest} />;
    case "GLOBE":
      return <Globe {...rest} />;
    case "HAND_SHAKE":
      return <HandShake {...rest} />;
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
      return <Selenium {...rest} />;
    case "TOSCA":
      return <Tosca {...rest} />;
    case "PAINT":
      return <Paint {...rest} />;
    case "RIGHT":
      return <Right {...rest} />;
    case "ARROW_RIGHT":
      return <ArrowRight {...rest} />;
    case "VEST":
      return <Vest {...rest} />;
    case "BUG_SLASH":
      return <BugSlash {...rest} />;
    case "BOLT":
      return <Bolt {...rest} />;
    default:
      return <BarsStaggered {...rest} />;
  }
};

export default RenderIcon;
