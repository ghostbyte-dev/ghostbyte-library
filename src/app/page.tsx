import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center py-16 px-6 lg:px-12">
        <div className="flex-1 flex flex-col items-start text-white">
          <h1 className="text-5xl lg:text-7xl font-bold uppercase">
            Ghostbyte <span className="text-yellow-400">Library</span>
          </h1>
          <p className="mt-4 text-lg max-w-xl">
            Discover an ever-growing collection of useful websites, hidden gems, and essential online tools. Categorized and tagged for easy access.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-yellow-400 text-black px-6 py-3 font-semibold rounded-lg hover:bg-yellow-300">
              Explore Library
            </button>
            <button className="border-white text-white px-6 py-3 font-semibold rounded-lg hover:bg-white hover:text-black">
              Contribute
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center w-full py-5 md:px-3">
          <div className="relative w-full max-w-md h-72 lg:h-96 bg-yellow-400 rounded-2xl">
            <Image
              src="/images/others/ReadingDoodle.svg"
              alt="Illustration of reading"
              fill
              className="rounded-xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="w-full max-w-5xl text-center py-12 px-6">
        <h2 className="text-3xl text-white font-semibold">Featured on Product Hunt</h2>
        <div className="mt-4">
          <a
            href="https://www.producthunt.com/posts/buckets-of-bookmarks?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-buckets&#0045;of&#0045;bookmarks"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385741&theme=neutral"
              alt="Buckets of Bookmarks on Product Hunt"
              className="mx-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
