export default function AddSubSectionModal({ setAddSectionBannerVisibility }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm">
      <div className="w-[450px] h-[450px] bg-gray-900 rounded-md flex items-center justify-center flex-col gap-8">
        <div className="text-white text-lg">New Section</div>
        <input
          className="transition-all p-2 w-[300px] bg-transparent focus:outline-none border-[1px] border-pink-400 rounded-md text-white"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="transition-all p-2 w-[300px] h-[200px] bg-transparent focus:outline-none resize-none border-pink-400 border-[1px] rounded-md text-white"
          placeholder="Description"
        ></textarea>

        <button
          onClick={() => setAddSectionBannerVisibility(false)}
          className="transition-all bg-gradient-to-r from-pink-700 to-pink-600 text-white p-2 rounded-md w-[100px] hover:from-pink-600 hover:to-pink-600"
        >
          Insert
        </button>
      </div>
    </div>
  );
}
