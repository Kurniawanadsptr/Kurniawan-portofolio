// @flow strict
import Link from 'next/link';
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
          <p className="text-sm">
          <Link
              target="_blank"
              href="mailto:Kurniawanadisaputra026@gmail.com"
              className="flex items-center gap-2 hover:text-[#16f2b3]"
            >
              <MdEmail />
              <span className="text-[#16f2b3]">Kurniawanadisaputra026@gmail.com</span>
            </Link>
          </p>
          <p className="text-sm">
          <Link
              target="_blank"
              href="https://wa.me/08990614399"
              className="flex items-center gap-2 hover:text-[#16f2b3]"
            >
              <BsFillTelephoneFill />
              <span className="text-[#16f2b3]">+628990614399</span>
            </Link>
          </p>
          <p className="text-sm">
          <Link
              target="_blank"
              href="https://www.instagram.com/kurniawanadsptr/"
              className="flex items-center gap-2 hover:text-[#16f2b3]"
            >
              <FaInstagram />
              <span className="text-[#16f2b3]">Kurniawanadsptr</span>
            </Link>
          </p>
          {/* <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/AnasInaam/sample-portfolio"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/AnasInaam/sample-portfolio/fork"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div> */}
        </div>
      </div>
    </div >
  );
};

export default Footer;