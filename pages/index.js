import AddCourse from "@/components/AddCourse";
import ClassRoomCard from "@/components/ClassRoomCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/utils/firebase";

export default function Home() {
  const [addCourseVisibility, setAddCourseVisibility] = useState(false);
  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  const getData = async () => {
    if (loading) return;
    if (!user) {
      return route.push("/auth/login");
    }
  };

  useEffect(() => {
    getData();
  }, [user, loading]);

  return (
    <div className=" flex items-center justify-center h-screen bg-gradient-to-r from-gray-700 to-gray-900">
      <div className="grid grid-cols-2 gap-4 overflow-auto">
        <ClassRoomCard />
        <ClassRoomCard />
        <ClassRoomCard />
      </div>

      <div
        onClick={() => setAddCourseVisibility(true)}
        className="absolute bottom-0  right-0 m-2 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-md p-2"
      >
        Add Unit
      </div>

      {addCourseVisibility && (
        <AddCourse setAddCategoryVisibility={setAddCourseVisibility} />
      )}
    </div>
  );
}
