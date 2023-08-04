import Twitter from "@/icons/Twitter";
import LinkedIn from "@/icons/Linkedin";
import Email from "@/icons/Email";
import Facebook from "@/icons/Facebook";

import styles from "./social.module.css";

const Social = () => {
  return (
    <div className={styles.socialWrapper}>
      <Twitter height={32} fill="#282828" />
      <LinkedIn height={32} fill="#282828" />
      <Facebook height={32} fill="#282828" />
      <Email height={28} fill="#282828" />
    </div>
  );
};

export default Social;
