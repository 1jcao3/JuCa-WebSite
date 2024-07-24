
import { IoIosSearch } from "react-icons/io";
export default function SearchBar() {


  return (
    <div className="hidden flex-row items-center justify-center md:flex ">
    <div className="relative  ">
      <input 
        type="text" 
        placeholder="Search..."
        className=" md:flex md:w-auto w-[2px] pl-10 pr-4 py-1 border-2 border-solid border-[#3f3f40] rounded bg-black icons focus:outline-none focus:border-white"
      />
      <IoIosSearch 
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        size={20}
      />
    </div>
  </div>
  )
}
