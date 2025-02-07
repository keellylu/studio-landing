import Link from "next/link";
import { Container } from "./container";
import { GithubIcon } from "./icons/github";
import { Logo } from "./icons/logo";
import { TwitterIcon } from "./icons/twitter";
import Image from "next/image";

import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { MdEmail } from "react-icons/md";


export const Footer = () => (
  <footer className="flex flex-col items-center justify-center mt-12 pt-[10rem] pb-[5rem] text-sm">
    
    <div className="flex mb-4 space-x-2">
      <a href="mailto:kellylu@overeasy.sh" target="_blank"> 
        <MdEmail size={18} className="icon-hover"/>
      </a>
      {/* <a href="https://x.com/getovereasy" target="_blank"> 
        <FaXTwitter size={18} className="icon-hover"/>
      </a> */}
      {/* <a href="https://github.com/overeasy-sh/overeasy" target="_blank"> 
        <FaGithub size={18} className="icon-hover"/>
      </a> */}
      <a href="https://linkedin.com/company/overeasysh" target="_blank"> 
        <FaLinkedinIn size={18} className="icon-hover"/>
      </a>
    </div>
          
    <div className="text-grey">
      &copy; {new Date().getFullYear()} Overeasy. All rights reserved.
    </div>



  </footer>
);
