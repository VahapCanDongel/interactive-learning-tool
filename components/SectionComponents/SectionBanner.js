export default function SectionBanner() {
  return (
    <div className="w-[250px] h-[60px] bg-white rounded-lg flex flex-col mt-6 gap-[60px] items-center">
      <div className="text-xl flex justify-center items-center h-full font-bold">
        Section Title
      </div>

      <div>
        <svg
          width="35"
          height="35"
          fill="#ffffff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:cursor-pointer"
        >
          <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm0 1.5A8.24 8.24 0 0 1 20.25 12 8.24 8.24 0 0 1 12 20.25 8.24 8.24 0 0 1 3.75 12 8.24 8.24 0 0 1 12 3.75Zm-.75 3.75v3.75H7.5v1.5h3.75v3.75h1.5v-3.75h3.75v-1.5h-3.75V7.5h-1.5Z"></path>
        </svg>
      </div>
    </div>
  );
}
