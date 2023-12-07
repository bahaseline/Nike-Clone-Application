import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { footerLogo } from "../assets/images";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a className="bg-black " href="/">
          <img src={footerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="text-slate-400 flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;