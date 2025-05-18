import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="fixed z-50 h-16 inset-0 bg-black/40 flex items-center text-white backdrop-blur-sm">
      <div className="container py-6 sm:px-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Logo />

          <nav className="">
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-6 leading-5 text-sm md:text-base tracking-tight font-normal"
            >
              <li>
                <Link href="/#content" className="">
                  Content
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
