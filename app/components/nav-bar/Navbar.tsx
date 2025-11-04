import { SunIcon } from "@heroicons/react/24/outline"
import { Cog8ToothIcon } from "@heroicons/react/24/outline"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

export default function Navbar () {
    return (
        <nav className="w-full h-20 flex justify-between items-center px-2 sm:px-8">
            {/* icon */}
            <div className="flex justify-center items-center text-l gap-x-3">
            <SunIcon className="size-16 text-yellow-600" />
            <p>Weather Now</p>
            </div>

         {/* units dropdown */}
         <div className="dropdown-container flex justify-center items-center text-l gap-x-4 bg-[#25253f] rounded-lg px-4 py-2">
            <Cog8ToothIcon className="size-6 text-white" />
            <p>Units</p>
            <ChevronDownIcon className="size-6 text-white cursor-pointer" />
         </div>
        </nav>
    )

}