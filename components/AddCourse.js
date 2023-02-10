import { addDoc, collection, deleteDoc, onSnapshot, query } from "@firebase/firestore";
import { db } from "../utils/firebase"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function AddCourse({ setAddCategoryVisibility }) {
  const [course, setCourse] = useState({description: ''})
  const route = useRouter()


  const submitCourses = async (e) => {
    e.preventDefault()
    const collectionRef = collection(db, 'courses')

    await addDoc(collectionRef, {
      ...course
    })

    setCourse({description: ''})
    return route.push('/')
  }

  return (
    <div className=" fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm">
      <div className="w-[400px] h-[300px] bg-gray-900 rounded-md flex justify-center items-center flex-col gap-6 shadow-lg">
        <div className="text-xl text-white">Insert Course</div>
        <form className="flex justify-center items-center flex-col gap-6" onSubmit={submitCourses}>
        <input
          value={course.description}
          onChange={(e) => setCourse({...course, description: e.target.value})}
          className="w-[300px]  p-2 rounded-md bg-transparent border-[1px] border-pink-400 text-white"
          placeholder="Course Name"
        />
        <div
          onClick={() => setAddCategoryVisibility(false)}
          className="w-[120px] bg-gray-900 text-white flex justify-center items-center rounded-md p-2 transition-all bg-gradient-to-r from-pink-700 to-pink-600 hover:from-pink-600 hover:to-pink-600"
        >
          Add
        </div>
        </form>
       
      </div>
    </div>
  );
}
