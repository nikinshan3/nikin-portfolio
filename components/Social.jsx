import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/nikinshanfaizal/",
  },
  { icon: <FaGithub />, path: "https://github.com/nikinshan" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/nikinshan3/" },
  { icon: <FaTwitter />, path: "https://x.com/nikinshan5645" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
