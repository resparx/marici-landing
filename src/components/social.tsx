import Email from "@/icons/email";
import Facebook from "@/icons/facebook";
import Linkedin from "@/icons/linkedin";
import Twitter from "@/icons/twitter";

const Social = () => {
  return (
    <div className="hidden sm:flex flex-col gap-3 fixed top-1/4 left-1 bg-white rounded-lg px-1 py-2">
      <Twitter className="h-8 fill-slate-800" />
      <Linkedin className="h-8 fill-slate-800" />
      <Facebook className="h-8 fill-slate-800" />
      <Email className="h-8 fill-slate-800" />
    </div>
  );
};

export default Social;
