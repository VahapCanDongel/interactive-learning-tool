import ClassRoomCard from "@/components/ClassRoomCard";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-2 gap-4 overflow-auto">
        <ClassRoomCard />
        <ClassRoomCard />
        <ClassRoomCard />
      </div>

      <div className="absolute bottom-0  right-0 m-2 bg-cyan-800 text-white rounded-md p-2">
        Add Class
      </div>
    </div>
  );
}
