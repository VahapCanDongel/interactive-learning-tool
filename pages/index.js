import AddCourse from "@/components/AddCourse";
import ClassRoomCard from "@/components/ClassRoomCard";
import { useState } from "react";

export default function Home() {
  const [addCourseVisibility, setAddCourseVisibility] = useState(false);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="grid grid-cols-2 gap-4 overflow-auto">
        <ClassRoomCard />
        <ClassRoomCard />
        <ClassRoomCard />
      </div>

      <div
        onClick={() => setAddCourseVisibility(true)}
        className="absolute bottom-0  right-0 m-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-md p-2"
      >
        Add Course
      </div>

      {addCourseVisibility && (
        <AddCourse setAddCategoryVisibility={setAddCourseVisibility} />
      )}
    </div>
  );
}
