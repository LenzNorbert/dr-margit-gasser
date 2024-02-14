import { Link } from '@remix-run/react';

export const ErrorHandler = () => {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-[url('/assets/bg-error.svg')]">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="select-none py-4 text-center font-qtBasker text-6xl text-cpText md:text-9xl lg:text-12xl">404</h1>
        <label htmlFor="home-button" className="select-none py-4 text-center font-qtBasker text-2xl text-cpText md:text-4xl lg:text-6xl">
          This page does not exist, return to home.
        </label>
        <Link to="/">
          <button type="button" id="home-button" className="aspect-square w-20 rounded-2xl bg-cpRed bg-opacity-30 p-3">
            <img loading="lazy" className="aspect-square w-full transition-all duration-150" src="/assets/home-icon.svg" />
          </button>
        </Link>
      </div>
    </main>
  );
};
