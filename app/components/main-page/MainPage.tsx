import CityBox from "@components/cityBox/CityBox";
import InputSearch from "@components/input/InputSearch";


export default function MainPage () {
    return (
        <div className="w-full sm:w-4/5 flex flex-col items-center">
    <h1 className="text-5xl text-center mb-16">How's the sky looking today?</h1>
    <InputSearch />
    <div className="w-full flex flex-col items-center sm:flex-row justify-center">
        {/* left side  */}
        <div className="w-4/5 sm:w-2/3 mt-12">
            <CityBox/>
        </div>

        {/* right side */}
        <div className="w-full sm:w-1/3">

        </div>
    </div>
    </div>
    
    )
}