function Footer() {
  return (
    <div className="py-6 sm:py-16 bg-gradient-to-b from-[#0A060F] from-35% to-[#1D1129] pb-10 text-white">
      <div className="container mx-auto">
        <p className="flex font-medium flex-col gap-0 justify-center mb-8 sm:flex-row sm:gap-4 sm:mb-16 text-gray-400 items-center">
          <a
            href="/roadmaps"
            className="hover:text-white py-1.5 px-2 sm:border-b-0 sm:px-0 sm:py-0 transition-colors border-b border-b-gray-700">
            Roadmaps
          </a>
          <a
            href="/guides"
            className="hover:text-white py-1.5 px-2 sm:border-b-0 sm:px-0 sm:py-0 transition-colors border-b border-b-gray-700">
            Guides
          </a>
          <a
            href="/videos"
            className="hover:text-white py-1.5 px-2 sm:border-b-0 sm:px-0 sm:py-0 transition-colors border-b border-b-gray-700">
            Videos
          </a>
          <a
            href="/about"
            className="hover:text-white py-1.5 px-2 sm:border-b-0 sm:px-0 sm:py-0 transition-colors border-b border-b-gray-700">
            About
          </a>
          <a
            href="https://youtube.com/theroadmap?sub_confirmation=1"
            className="hover:text-white py-1.5 px-2 sm:border-b-0 sm:px-0 sm:py-0 transition-colors"
            target="_blank">
            YouTube
          </a>
        </p>
        <div
          className="flex justify-center items-center flex-row sm:flex-row text-center px-2
        ">
          <div className="max-w-[600px]">
            <p className="flex justify-center items-center text-md">
              <a
                href="/"
                className="inline-flex items-center font-medium hover:text-gray-400 text-lg text-white transition-colors">
                <svg
                  viewBox="0 0 283 283"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000"
                  height={30}
                  width={30}>
                  <path
                    d="M0 39C0 17.46 17.46 0 39 0h205c21.539 0 39 17.46 39 39v205c0 21.539-17.461 39-39 39H39c-21.54 0-39-17.461-39-39V39Z"
                    fill="#fff"
                  />
                  <path d="M121.215 210.72c-1.867.56-4.854 1.12-8.96 1.68-3.92.56-8.027.84-12.32.84-4.107 0-7.84-.28-11.2-.84-3.174-.56-5.88-1.68-8.12-3.36s-4.014-3.92-5.32-6.72c-1.12-2.987-1.68-6.813-1.68-11.48v-84c0-4.293.746-7.933 2.24-10.92 1.68-3.173 4.013-5.973 7-8.4s6.626-4.573 10.92-6.44c4.48-2.053 9.24-3.827 14.28-5.32a106.176 106.176 0 0 1 15.68-3.36 95.412 95.412 0 0 1 16.24-1.4c8.96 0 16.053 1.773 21.28 5.32 5.226 3.36 7.84 8.96 7.84 16.8 0 2.613-.374 5.227-1.12 7.84-.747 2.427-1.68 4.667-2.8 6.72a133.1 133.1 0 0 0-12.04.56c-4.107.373-8.12.933-12.04 1.68s-7.654 1.587-11.2 2.52c-3.36.747-6.254 1.68-8.68 2.8v95.48zm45.172-22.4c0-7.84 2.426-14.373 7.28-19.6s11.48-7.84 19.88-7.84 15.026 2.613 19.88 7.84 7.28 11.76 7.28 19.6-2.427 14.373-7.28 19.6-11.48 7.84-19.88 7.84-15.027-2.613-19.88-7.84-7.28-11.76-7.28-19.6z" />
                </svg>
                <span className="ml-2">dBug Labs</span>
              </a>
              <span className="mx-2 text-gray-400">-</span>
              <a
                href="https://twitter.com/intent/user?screen_name=kamranahmedse"
                className="px-1.5 bg-blue-600 font-regular hover:bg-blue-700 py-1 rounded-md text-sm"
                target="_blank">
                <span className="hidden sm:inline">@dbuglabs</span>
                <span className="inline sm:hidden">Kamran Ahmed</span>
              </a>
            </p>
            <p className="my-4 text-slate-300/60">
              Community created roadmaps, articles, resources and journeys to
              help you choose your path and grow in your career.
            </p>
            <div className="text-sm text-gray-400">
              <p>
                © roadmap.sh <span className="mx-1.5">·</span>
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
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Footer };
