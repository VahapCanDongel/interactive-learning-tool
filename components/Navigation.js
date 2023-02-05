import Link from "next/link";

export default function Navigation() {
  return (
    <div className="w-full h-[80px] bg-gradient-to-r from-gray-700 to-gray-900 flex justify-between items-center p-2 shadow-lg">
      <div className="text-white flex justify-between items-center w-full">
        <Link href="/" className="text-[35px] font-caveat">
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
              <div className=" text-gray-700 p-2  rounded-md relative right-[60px] flex justify-center items-center">
                <svg
                  width="30"
                  height="30"
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.25 2.25c-4.134 0-7.5 3.366-7.5 7.5 0 1.796.63 3.442 1.688 4.734L2.46 20.461l1.078 1.078 5.977-5.977a7.442 7.442 0 0 0 4.734 1.688c4.134 0 7.5-3.366 7.5-7.5s-3.366-7.5-7.5-7.5Zm0 1.5c3.322 0 6 2.678 6 6s-2.678 6-6 6-6-2.678-6-6 2.678-6 6-6Z"></path>
                </svg>
              </div>
            </li>
          </div>
        </ul>
      </div>

      <div className="ml-auto text-white flex justify-center items-center gap-6">
        <Link href="/login">Logout</Link>
      </div>
    </div>
  );
}
