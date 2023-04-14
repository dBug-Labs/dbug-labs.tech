import logo from "../../assets/logo.webp";

function Footer() {
  return (
    <div className="py-6 sm:py-16 bg-gradient-to-b from-[#0A060F] from-35% to-[#1D1129] pb-10 text-white">
      <div className="container mx-auto">
        <p className="flex font-medium flex-col gap-0 justify-center mb-8 sm:flex-row sm:gap-4 sm:mb-16 text-gray-400 items-center">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              document.body.firstElementChild.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="hover:text-white py-1.5 px-2 sm:border-b-0 sm:px-0 sm:py-0 transition-colors border-b border-b-gray-700 outline-none focus-within:text-white">
            Home
          </a>
          <a
            href="#about"
            className="hover:text-white py-1.5 px-2 sm:border-b-0 sm:px-0 sm:py-0 transition-colors border-b border-b-gray-700 outline-none focus-within:text-white">
            About
          </a>
          <a
            href="#events"
            className="hover:text-white py-1.5 px-2 sm:border-b-0 sm:px-0 sm:py-0 transition-colors border-b border-b-gray-700 outline-none focus-within:text-white">
            Events
          </a>
        </p>
        <div
          className="flex justify-center items-center flex-row sm:flex-row text-center px-2
        ">
          <div className="max-w-[600px]">
            <p className="flex justify-center items-center text-md">
              <a
                href="/"
                className="inline-flex items-center font-medium hover:text-gray-400 text-lg text-white transition-colors outline-none focus-within:text-gray-400">
                <img
                  src={logo}
                  alt="dbuglabs"
                  height={30}
                  width={30}
                  className="rounded-lg"
                />
                <span className="ml-2">dBug Labs</span>
              </a>
              <span className="mx-2 text-gray-400">-</span>
              <a
                href="https://instagram.com/dbuglabs"
                className="px-1.5 bg-blue-600 font-regular hover:bg-blue-700 py-1 rounded-md text-sm outline-none focus:ring"
                target="_blank">
                <span className="hidden sm:inline">@dbuglabs</span>
                <span className="inline sm:hidden">Kamran Ahmed</span>
              </a>
            </p>
            <p className="my-4 text-slate-300/60">
              Join dBug Labs, the student club dedicated to mastering the art of
              debugging and testing. Enhance your skills, share your knowledge,
              and work collaboratively in a supportive community of like-minded
              students.
            </p>
            <div className="text-sm text-gray-400">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const textToCopy = e.currentTarget.dataset.text;
                  navigator.clipboard.writeText(textToCopy);
                  e.currentTarget.innerText = "Email copied!";
                  const element = e.currentTarget;
                  setTimeout(() => {
                    element.innerText = textToCopy;
                  }, 3000);
                }}
                className="hover:text-white outline-none focus-within:text-white"
                data-text="debuglabs@gmail.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 inline-block mr-1">
                  <path
                    strokeLinecap="round"
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
                debuglabs@gmail.com
              </button>
              <span className="mx-1.5">·</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const textToCopy = e.currentTarget.dataset.text;
                  navigator.clipboard.writeText(textToCopy);
                  e.currentTarget.innerText = "Number copied!";
                  const element = e.currentTarget;
                  setTimeout(() => {
                    element.innerText = textToCopy;
                  }, 3000);
                }}
                className="hover:text-white outline-none focus-within:text-white"
                data-text="+919624882993">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 inline-block mr-1">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                +91 96248 82993
              </button>
            </div>
            <div className="text-sm text-gray-400 mt-12 flex justify-center items-center gap-1">
              {/* <p>
                &copy; dbuglabs <span className="mx-1.5">·</span>
                <a href="/about" className="hover:text-white">
                  FAQs
                </a>
                <span className="mx-1.5">·</span>
                <a href="/terms" className="hover:text-white">
                  Terms
                </a>
                <span className="mx-1.5">·</span>
                <a href="/privacy" className="hover:text-white">
                  Privacy
                </a>
              </p> */}
              &copy; Crafted with
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#ff0000"
                className="w-5 h-5 inline-block">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
              @ dBug Labs {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Footer };
