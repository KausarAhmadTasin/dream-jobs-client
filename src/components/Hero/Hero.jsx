const Hero = () => {
  return (
    <div>
      <header>
        <div className="flex justify-between flex-col-reverse my-5 gap-x-4 border py-8 lg:py-32 rounded-[2rem] px-8 bg-white dark:bg-[#1A1B1F] items-center">
          {/* 
             Banner input 
          */}
          <div className="relative mt-10 lg:mt-14 lg:w-5/12 shadow-2xl md:w-3/4">
            <input
              type="text"
              className="rounded-md h-full py-2 border focus:outline-none focus:shadow-md px-3 flex items-center text-gray-600 w-full dark:bg-slate-50 bg-white"
              placeholder="Job title"
            />
            <div className="bg-sky-400 h-full rounded-e-md py-2 px-3 flex items-center text-white font-semibold top-0 -right-1 absolute cursor-pointer">
              <p>Search Job</p>
            </div>
          </div>

          {/* Banner Text */}
          <div className="text-center lg:w-3/5 md:w-3/4 ">
            <h1 className="text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-600 dark:from-sky-400 to-orange-400 dark:to-orange-300 mb-5 font-semibold lg:mb-7">
              Your Dream Job Awaits
            </h1>
            <p className="dark:text-gray-200 text-gray-500">
              Find the best job opportunities tailored to your skills and
              preferences.{" "}
              <span className="underline underline-offset-[6px] decoration-dashed decoration-orange-400">
                Browse through various job categories
              </span>{" "}
              and apply seamlessly.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;