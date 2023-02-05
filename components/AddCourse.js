export default function AddCourse({ setAddCategoryVisibility }) {
  return (
    <div className=" fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm">
      <div className="w-[400px] h-[300px] bg-gray-900 rounded-md flex justify-center items-center flex-col gap-6 shadow-lg">
        <div className="text-xl text-white">Insert Course</div>
        <input
          className="w-[300px]  p-2 rounded-md bg-transparent border-[1px] border-pink-400 text-white"
          placeholder="Course Name"
        />
        <div
          onClick={() => setAddCategoryVisibility(false)}
          className="w-[120px] bg-gray-900 text-white flex justify-center items-center rounded-md p-2 transition-all bg-gradient-to-r from-pink-700 to-pink-600 hover:from-pink-600 hover:to-pink-600"
        >
          Add
        </div>
      </div>
    </div>
  );
}
