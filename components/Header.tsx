import React, { useEffect, useState } from 'react';
import { BellIcon, SearchIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import Avatar from '../images/avatar.png';
import Netflix from '../images/netflix.png';
import Image from 'next/image';
import useAuth from '../hooks/useAuth';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10 select-none">
        <Image
          src={Netflix}
          width={100}
          height={25}
          className="cursor-pointer object-none "
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light select-none">
        <SearchIcon className="hidden sm:inline h-6 w-6 cursor-pointer" />

        <p className="hidden lg:inline  cursor-pointer">Kids</p>

        <BellIcon className="hidden sm:inline h-6 w-6 cursor-pointer" />

        <div>
          {/* <Link href="/account"> */}
          <Image
            onClick={() => logout()}
            src={Avatar}
            className="cursor-pointer rounded"
          />
          {/* </Link> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
