import Link from "next/link";

export default function Navigation() {
  return (
    <div className="w-full h-[80px] bg-cyan-800 flex justify-between items-center p-2">
      <div className="text-white flex justify-between items-center w-full">
        <Link href="/">Interactive Learning Tool</Link>

        <ul className="flex gap-6 justify-center items-center text-white mr-[200px]">
          <div className="flex  justify-center items-center gap-4">
            <li>
              <input
                type="search"
                name=""
                // value=""
                placeholder="Search..."
                className="outline-none rounded-md w-[400px] h-[40px] p-1 text-cyan-800"
              />
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
