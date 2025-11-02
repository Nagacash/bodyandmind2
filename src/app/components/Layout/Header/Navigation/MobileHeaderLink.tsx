import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname, useRouter } from "next/navigation";
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });

const MobileHeaderLink: React.FC<{ item: HeaderItem, setNavbarOpen: (isOpen: boolean) => void }> = ({ item, setNavbarOpen }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();

  const playAudio = () => {
    const audio = new Audio('/sound/click.wav');
    audio.volume = 0.5;
    audio.play();
  };

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const handleClick = (e: React.MouseEvent) => {
    playAudio();
    if (item.href.startsWith("#")) {
      e.preventDefault();
      router.push(item.href);
    } else if (item.submenu) {
      handleToggle();
    }
    setNavbarOpen(false);
  };

  const activeStyle = {
    backgroundColor: 'white'
  };

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        target={item.target}
        onClick={handleClick}
        className={`text-lg font-normal text-black hover:text-[#89CFF0] hover:scale-105 hover:underline mb-6 ${bebasNeue.className} transform transition duration-300`}
        style={path === item.href ? activeStyle : {}}
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
      {submenuOpen && item.submenu && (
        <div className="bg-white p-2 w-full">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className="block py-2 text-gray-500 hover:bg-gray-200 hover:text-black"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;