"use client";
import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname, useRouter } from "next/navigation";
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();
  const router = useRouter();

  const playAudio = () => {
    const audio = new Audio('/sound/click.wav');
    audio.volume = 0.5;
    audio.play();
  };

  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };
  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    playAudio();
    if (item.href.startsWith("#")) {
      e.preventDefault();
      router.push(item.href);
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        target={item.target}
        onClick={handleClick}
        className={`text-lg flex hover:text-[#89CFF0] hover:scale-105 hover:underline capitalized text-black ${bebasNeue.className} ${
          path === item.href ? "text-black/75" : ""
        } transform transition duration-300`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>
      {submenuOpen && (
        <div
          className={`absolute py-2 left-0 mt-0.5 w-60 bg-white dark:bg-darklight dark:text-white shadow-lg rounded-lg `}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {item.submenu?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-2   ${
                path === subItem.href
                  ? "text-white"
                  : "text-black dark:text-white hover:bg-primary"
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;