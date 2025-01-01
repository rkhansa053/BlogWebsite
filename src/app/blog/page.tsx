import Link from "next/link";


export default function Blog(){
    return(
      <div>
        <div className="bg-white font-sans p-4">
  <div className="max-w-5xl max-lg:max-w-3xl max-md:max-w-sm mx-auto">
    <div>
      <h2 className="text-3xl font-extrabold text-gray-800 inline-block">
        LATEST BLOGS
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
        <div className="h-64 lg:w-full">
          <img
            src="https://m.media-amazon.com/images/S/pv-target-images/9552935dbc42f282810b432318ec0dad3717f4c743caf56e92ac10040a67f675.jpg"
            alt="Blog Post 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800">
           The Garfield Movie
          </h3>
          <span className="text-sm block text-gray-700 mt-2">
            24 MAY 2024 | USA
          </span>
          <p className="text-sm text-gray-500 mt-4">
         This is a comedy film based on the comic strip Garfield created by Jim Davis.
          </p>
          <a
            href="javascript:void(0);"
            className="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline"
          >
            <Link href="/readMore-1">Read More</Link>
            
          </a>
        </div>
      </div>

      {/* BLOG 2 */}
      <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
        <div className="h-64 lg:w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhAJrooLxfScEU6ZPRlWul4EmBJYJM_1t7Ag&s"
            alt="Blog Post 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800">
          Double Tuckerr
          </h3>
          <span className="text-sm block text-gray-700 mt-2">
            5 APR 2024 | BY AIR FLICK
          </span>
          <p className="text-sm text-gray-500 mt-4">
          Double Tuckerr is 2024 Indian Tamil-language live-action animated fantasy comedy film written and directed by Meera Mahadhi. 
          </p>
          <a
            href="javascript:void(0);"
            className="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline"
          >
            <Link href="readMore-2">Read More</Link>
            
          </a>
        </div>
      </div>

      {/* BLOG 3 */}
      <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
        <div className="h-64 lg:w-full">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTVXIXVwclOPh5eUuVyKhE_osTsavNc-56-oR7z7xwmOOP6--wJaVl7jmVOG2lBqBb02_ndTQ"
            alt="Blog Post 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800">
          Inside Out 2
          </h3>
          <span className="text-sm block text-gray-400 mt-2">
            14 JUNE 2024 | BY  PIXAR ANIMATION STUDIOS
          </span>
          <p className="text-sm text-gray-500 mt-4">
          Inside Out 2 is a 2024 American animated coming-of-age film produced by Pixar Animation Studios for Walt Disney Pictures which includes psychology theme.
          </p>
          <a
            href="javascript:void(0);"
            className="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline"
          >
            <Link href="readMore-3"> Read More</Link>
           
          </a>
        </div>
      </div>

      {/* BLOG 4 */}
      <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
        <div className="h-64 lg:w-full">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSqmD_K_HfRHJAp69m3jwcJMKLCtiB5vFl045PyUOoTYxxRzHB8x-vJqOhMcDGiKIvEzqnf"
            alt="Blog Post 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800">
          The Boy and the Heron
          </h3>
          <span className="text-sm block text-gray-400 mt-2">
            14 JULY 2023 | BY TOHO
          </span>
          <p className="text-sm text-gray-500 mt-4">
          In the wake of his mother's death and his father's remarriage, a headstrong boy named Mahito ventures into a dreamlike world shared by both the living and the dead.
          </p>
          <a
            href="javascript:void(0);"
            className="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline"
          >
            <Link href="readMore-4">Read More</Link>
          </a>
        </div>
      </div>

      {/* BLOG 5 */}
      <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
        <div className="h-64 lg:w-full">
          <img
            src="https://media.themoviedb.org/t/p/w500/gaINMBMGIow4kd8Dq06aytoomtS.jpg"
            alt="Blog Post 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800">
          Woody Woodpecker Goes to Camp
          </h3>
          <span className="text-sm block text-gray-400 mt-2">
            12 APRIL 2024 | BY JON ROSENBAUM
          </span>
          <p className="text-sm text-gray-500 mt-4">
          Based on the cartoon character of the same name and serving as a sequel to the 2017 film Woody Woodpecker and the second installment of the Woody Woodpecker live-action film series.
          </p>
          <a
            href="javascript:void(0);"
            className="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline"
          >
            <Link href="readMore-5">Read More</Link>
          </a>
        </div>
      </div> 

      {/* BLOG 6 */}
      <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
        <div className="h-64 lg:w-full">
          <img
            src="https://m.media-amazon.com/images/M/MV5BMzY4Mjg2Y2MtZmQxMC00N2FjLTlmMzctYWMxNmRhYWY5Yjk3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            alt="Blog Post 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800">
          Thelma the Unicorn
          </h3>
          <span className="text-sm block text-gray-400 mt-2">
            17 MAY 2024 | BY JARED AND JERUSHA HESS
          </span>
          <p className="text-sm text-gray-500 mt-4">
          Thelma is a small-time pony who dreams of becoming a glamorous music star.
          </p>
          <a
            href="javascript:void(0);"
            className="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline"
          >
            <Link href="readMore-6">Read More</Link>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    )

}