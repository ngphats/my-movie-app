import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <>
      <main className="p-4">
        <section className="mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="relative col-start-1 row-start-1 content-end p-4 sm:row-start-2 sm:mt-4 sm:p-0 lg:row-start-1 lg:content-none">
            <p className="text-sm font-medium leading-4 text-white sm:text-black">
              Entire house
            </p>
            <h1 className="text-lg font-semibold text-white sm:text-black">
              Beach House in Collingwood
            </h1>
          </div>

          <div className="col-start-1 col-end-3 row-start-1 grid gap-4 sm:grid-cols-4 lg:col-start-2">
            <img
              src="https://tailwindcss.com/_next/static/media/beach-house-interior-2.3672af98.jpg"
              alt=""
              className="col-span-2 h-60 w-full rounded-lg object-cover sm:h-52 lg:col-span-4"
              loading="lazy"
            />
            <img
              src="https://tailwindcss.com/_next/static/media/beach-house-interior-2.3672af98.jpg"
              alt=""
              className="col-span-2 hidden h-52 w-full rounded-lg object-cover sm:block md:col-span-1 lg:col-span-2 lg:h-32"
              loading="lazy"
            />
            <img
              src="https://tailwindcss.com/_next/static/media/beach-house-interior-2.3672af98.jpg"
              alt=""
              className="hidden h-52 w-full rounded-lg object-cover md:block lg:col-span-2 lg:row-start-2 lg:h-32"
              loading="lazy"
            />
          </div>

          <dl className="row-start-2 mt-4 flex items-center gap-4 text-xs font-medium sm:row-start-3 sm:mt-0">
            <dt className="flex items-center gap-1 text-indigo-500">
              <FontAwesomeIcon icon={faStar} />
              <span>
                4.89 <span className="font-normal text-slate-400">(128)</span>
              </span>
            </dt>
            <dt className="flex items-center gap-1">
              <FontAwesomeIcon icon={faLocation} />
              <span>Collingwood, Ontario</span>
            </dt>
          </dl>

          <div className="row-start-3 mt-4 sm:col-start-2 sm:row-span-2 lg:col-start-1 lg:row-span-1 lg:row-start-4">
            <button className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium leading-6 text-white">
              Check availability
            </button>
          </div>

          {/* <p className="col-start-1 mt-4 text-sm leading-6 sm:col-span-2">
            This sunny and spacious room is for those traveling light and
            looking for a comfy and cosy place to lay their head for a night or
            two. This beach house sits in a vibrant neighborhood littered with
            cafes, pubs, restaurants and supermarkets and is close to all the
            major attractions such as Edinburgh Castle and Arthurs Seat.
          </p> */}
        </section>
      </main>
    </>
  );
}
export default Header;
