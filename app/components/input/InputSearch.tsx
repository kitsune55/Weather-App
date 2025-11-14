import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export default function InputSearch () {
return (
   <div className="w-4/5 xl:w-3/5 flex md:flex-row flex-col items-center justify-center gap-y-8 md:gap-y-0 md:gap-x-4">
   <div className="w-full flex justify-center relative md:w-4/5">
      <MagnifyingGlassIcon aria-hidden="true" className="size-6 z-10 text-(--content-color) absolute top-[25%] left-[5%]"/>
      <label htmlFor="searchPlace"></label>
      <input id="searchPlace" type="text" placeholder='Search for a place...' className="cursor-pointer content-boxes-style w-full py-4 pr-4 rounded-xl bg-(--boxes-fill) pl-12 sm:pl-20 outline-none focus:ring-[#4657D9] focus:ring-1 truncate" />
   </div>
   <button className="bg-[#4657D9] w-full py-4 px-6 rounded-xl cursor-pointer md:w-1/5 whitespace-normal wrap-break-word hover:opacity-100 transition-opacity opacity-80 duration-300 ease-in active:shadow-[inset_0_4px_6px_rgba(0,0,0,0.5)] shadow">Search</button>
   </div>
)
}