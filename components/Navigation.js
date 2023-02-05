import Link from "next/link";

export default function Navigation() {
  return (
    <div className="w-full h-[80px] bg-gradient-to-r from-gray-700 to-gray-900 flex justify-between items-center p-2 shadow-lg">
      <div className="text-white flex justify-between items-center w-full">
        <Link href="/" className="text-[30px] font-bold">
          Interactive Learning Tool
        </Link>

        <ul className="flex gap-6 justify-center items-center text-white mr-[200px]">
          <div className="flex  justify-center items-center gap-4">
            <li className="flex gap-2 items-center">
              <input
                type="search"
                name=""
                // value=""
                placeholder="Courses"
                className="transition-all placeholder:text-white outline-none rounded-md w-[400px] h-[40px] p-2  bg-transparent outline-white outline-[1px] text-white focus:outline-none focus:border-b-[1px] focus:rounded-none"
              />
              <div className="bg-white text-gray-700 p-2 w-[80px] h-[30px] rounded-md relative right-[100px] flex justify-center items-center">
                Search
              </div>
            </li>
          </div>
        </ul>
      </div>

      <div className="ml-auto text-white flex justify-center items-center gap-6">
        <Link href="/classrooms">Classroom's</Link>
        <Link href="/login">Logout</Link>
      </div>
    </div>
  );
}
