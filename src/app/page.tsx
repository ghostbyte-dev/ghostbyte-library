import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-gray-900 md:ml-64 min-h-screen w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center py-16 px-6 lg:px-12">
        <div className="flex-1 flex flex-col items-start text-white">
          <h1 className="text-5xl lg:text-7xl font-bold uppercase">
            Ghostbyte <span className="text-yellow-400 medium">Library</span>
          </h1>
          <p className="mt-4 text-lg max-w-xl">
            Discover an ever-growing collection of useful websites, hidden gems,
            and essential online tools. Categorized and tagged for easy access.
          </p>
          {/* <div className="mt-6 flex gap-4">
            <Link href="/categories">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:cursor-pointer">
                Explore Library
              </button>
            </Link>
            <Link href="/contribute">
              <button className="bg-white border-white text-black px-6 py-3 rounded-lg hover:cursor-pointer">
                Contribute
              </button>
            </Link>
          </div> */}
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

      {/* Popular Categories */}
      <div className="w-full max-w-6xl text-center py-16 px-6">
        <h2 className="text-3xl text-white font-semibold">
          Popular Categories
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Browse some of the most visited sections in our library.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {[
            { name: "Typography", link: "/fonts", icon: "🖋️" },
            { name: "AI Art", link: "/ai-art", icon: "🎨" },
            { name: "Stock Photos", link: "/stock-photos", icon: "📸" },
            { name: "Design Tools", link: "/tools", icon: "🛠️" },
            { name: "Icons", link: "/icons", icon: "🔖" },
            { name: "UI Components", link: "/ui-components", icon: "🖥️" },
          ].map((category) => (
            <Link key={category.link} href={category.link}>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 cursor-pointer transition">
                <p className="text-4xl">{category.icon}</p>
                <h3 className="text-xl font-semibold mt-2 text-white">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* <div className="w-full max-w-5xl text-center py-16 px-6">
        <h2 className="text-3xl text-white font-semibold">What People Say</h2>
        <p className="mt-4 text-lg text-gray-300">
          Hear from some of our happy users.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Alex J.",
              feedback:
                "Ghostbyte Library is my go-to resource for finding amazing design assets!",
              image: "/images/testimonials/alex.jpg",
            },
            {
              name: "Sophie R.",
              feedback:
                "A well-curated library that has saved me hours of research. Highly recommend!",
              image: "/images/testimonials/sophie.jpg",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-white"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full"
              />
              <p className="mt-4 italic text-gray-300">
                "{testimonial.feedback}"
              </p>
              <h3 className="mt-2 font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div> */}

      {/* <div className="w-full max-w-5xl text-center py-12 px-6">
        <h2 className="text-3xl text-white font-semibold">
          Featured on Product Hunt
        </h2>
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
      </div> */}

      <div className="mt-10 pb-10 text-center text-white">
        Developed with ❤️ by{" "}
        <Link href="https://ghostbyte.dev">
          <strong className="text-white">Ghostbyte</strong>
        </Link>
      </div>
    </div>
  );
};

export default Home;
