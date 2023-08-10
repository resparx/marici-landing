
import classNames from "classnames/bind";
import Twitter from "@/icons/Twitter";
import LinkedIn from "@/icons/Linkedin";
import Email from "@/icons/Email";
import Facebook from "@/icons/Facebook";

import styles from "./social.module.css";

const Social = ({ type }: { type: string }) => {
  const bindStyles = classNames.bind(styles);
  const wrapperStyles = bindStyles({
    socialWrapper: type === "REGULAR",
    footerSocial: type === "FOOTER",
  });

  const iconColor = type === "FOOTER" ? "#FFFFFF" : "#282828";
  return (
    <div className={wrapperStyles}>
      <Twitter height={32} fill={iconColor} />
      <LinkedIn height={32} fill={iconColor} />
      <Facebook height={32} fill={iconColor} />
      <Email height={28} fill={iconColor} />
    </div>
  );
};

export default Social;
