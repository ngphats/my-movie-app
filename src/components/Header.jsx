import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex h-14 items-center justify-between bg-slate-950 px-8 text-white lg:h-20">
      <div className="flex items-center gap-4 lg:gap-6">
        <Link to="/">
          <img
            src="/images/netflix.png"
            className="w-16 sm:w-28"
            title="logo"
          />
        </Link>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#" className="lg:text-xl">
              Phim
            </a>
          </li>
          <li>
            <a href="#" className="lg:text-xl">
              Truyền Hình
            </a>
          </li>
        </ul>
      </div>
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer" />
      </div>
    </header>
  );
}
export default Header;
