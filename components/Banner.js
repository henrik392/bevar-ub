const Banner = () => {
  return (
    <div className="bg-primary-300">
      <div className="py-3 mx-auto max-w-7xl responsive-padding">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center flex-1 w-0">
            <span className="flex p-2 rounded-lg bg-primary-400">
              {/* Heroicon name: outline/speakerphone */}
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">
                Takker for alle som har støttet oss!
              </span>
              <span className="hidden md:inline">
                Bevar UB avsluttet all salg 17. mai. Vi takker for alle som har
                støttet oss bedriften 😊
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
