import ScrollLink from './helper/ScrollLink'; // Import the Client Component

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          {/* <ScrollLink href="/" className="text-[#16f2b3] text-3xl font-bold">
            Kurniawan
          </ScrollLink> */}
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <ScrollLink href="#about" className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink href="#education" className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink href="#skills" className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink href="#projects" className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
