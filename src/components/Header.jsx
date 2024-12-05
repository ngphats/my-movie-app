import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <>
      <main className="px-4 py-4">
        <section className="grid grid-cols-1">
          <div className="relative col-start-1 row-start-1 sm:row-start-2 content-end sm:content-normal rounded-lg bg-black bg-opacity-20 p-4 sm:bg-none sm:bg-opacity-0 sm:p-0 sm:mt-4">
            <p className="text-sm font-medium text-white sm:text-black">
              Entire house
            </p>
            <h1 className="text-lg font-semibold text-white sm:text-black">
              Beach House in Collingwood
            </h1>
          </div>

          <div className="col-start-1 col-end-3 row-start-1 grid sm:grid-cols-2 gap-4">
            <img
              src="https://tailwindcss.com/_next/static/media/beach-house-interior-2.3672af98.jpg"
              alt=""
              className="h-60 w-full rounded-lg sm:h-52 object-cover"
              loading="lazy"
            />
            <img
              src="https://tailwindcss.com/_next/static/media/beach-house-interior-2.3672af98.jpg"
              alt=""
              className="hidden sm:block h-52 w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>

          <dl className="text-black mt-4 flex items-center gap-4 row-start-2 sm:row-start-3 sm:mt-0">
            <dd className="flex items-center gap-1">
              <FontAwesomeIcon icon={faStar} />
              <span>
                4.89 <span>(128)</span>
              </span>
            </dd>
            <dd className="flex items-center gap-1">
              <FontAwesomeIcon icon={faLocation} />
              <span>Collingwood, Ontario</span>
            </dd>
          </dl>

          <div className="mt-4 row-start-3 sm:row-start-2 sm:row-span-2 sm:col-start-2">
            <button className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium leading-6 text-white">
              Check availability
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
export default Header;
