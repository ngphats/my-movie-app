function Header() {
  return (
    <>
      <main className="px-2 p-4">
        <section className="grid grid-cols-1">
          <div className="relative col-start-1 row-start-1 content-end p-4 bg-black bg-opacity-20">
            <p className="text-white font-medium text-sm leading-4">Entire house</p>
            <h1 className="text-white text-lg font-semibold">Beach House in Collingwood</h1>
          </div>

          <div className="col-start-1 row-start-1">
            <img
              src="https://tailwindcss.com/_next/static/media/beach-house-interior-2.3672af98.jpg"
              alt=""
              className="h-60 w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </section>
      </main>
    </>
  );
}
export default Header;
