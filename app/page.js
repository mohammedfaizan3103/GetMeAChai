import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="header text-white flex flex-col justify-center items-center h-[44vh] gap-3">
        <div className="text-3xl font-semibold">Buy Me A Chai</div>
        <div className="px-3">
          A crowd funding platform for creators. Get funded by your fans and followers.
        </div>
        <div className="buttons">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Start Now!
            </span>
          </button>
          <Link href="/about">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Read More
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="h-[1.5px] bg-gray-500"></div>
      <div className="my-3 space-y-6 mb-6">
        <div className="text-white text-center my-4 text-2xl font-semibold">Your Fans Can Buy You A Chai</div>
        <div className="items flex flex-col gap-2 sm:flex-row text-white justify-between px-10">
        <div className="space-y-2 flex flex-col items-center">
            <img className="bg-slate-500 rounded-full p-4 h-[88px]" src="/ma.png" alt="" />
            <div className="font-semibold">Fans want to help</div>
            <div>Your fans are availabe to help you</div>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <img className="bg-slate-500 rounded-full p-4 h-[88px]" src="/coin.png" alt="" />
            <div className="font-semibold">Fans want to help</div>
            <div>Your fans are availabe to help you</div>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <img className="bg-slate-500 rounded-full p-4 h-[88px]" src="/group.png" alt="" />
            <div className="font-semibold">Fans want to help</div>
            <div>Your fans are availabe to help you</div>
          </div>
        </div>
        
      </div>
      <div className="h-[1.5px] bg-gray-500"></div>
      <div className="mb-6">
        <div className="text-white text-center my-4 text-2xl font-semibold">Demo video</div>
        <div className="flex justify-center">
        <iframe className="w-[85%] md:w-[480px]" width="" height="315" src="https://www.youtube.com/embed/gpypFxhqMrU?si=-zGxzIRf2fYe2R_v" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        {/* <div className="text-whtie">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi at officia temporibus porro quidem, possimus exercitationem dolor doloribus error aspernatur accusantium cum tenetur quos assumenda laudantium, delectus, eum inventore! Iusto voluptatem corporis, exercitationem autem error quis eos cum, dicta labore a et voluptatum harum sit.</div> */}
      </div>
    </main>
  );
}
export const metadata = {
  title: "Home - Get Me A Chai"
}
