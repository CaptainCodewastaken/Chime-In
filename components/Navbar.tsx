import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';
import { SignedIn, UserButton,SignInButton,SignedOut } from '@clerk/nextjs';




const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="yoom logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          YOOM
        </p>
      </Link>
      <div className="flex-between gap-5">
      <SignedOut>
            <SignInButton class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"/>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
      <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
