export default function AddSubSectionModal({ setAddSectionBannerVisibility }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm">
      <div className="w-[450px] h-[450px] bg-gray-900 rounded-md flex items-center justify-center flex-col gap-8">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="text-white text-lg">New Section</div>
          <div className="flex text-white text-sm gap-2">
            <div className="bg-pink-500 p-1 rounded-md flex justify-center items-center">
              <svg
                width="20"
                height="20"
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.5 2.25v19.5h15V7.195l-.21-.234-4.5-4.5-.235-.211H4.5ZM6 3.75h7.5v4.5H18v12H6V3.75Zm9 1.078 1.922 1.922H15V4.828Z"></path>
              </svg>
              Add Doc
            </div>
            <div className="bg-pink-500 p-1 rounded-md flex justify-center items-center">
              <svg
                width="20"
                height="20"
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.313 3a4.684 4.684 0 0 0-3.329 1.383l-1.101 1.101A4.689 4.689 0 0 0 10.5 8.813c0 .594.114 1.174.328 1.71l1.219-1.218a3.214 3.214 0 0 1 .89-2.766l1.102-1.101a3.21 3.21 0 0 1 2.274-.938c.852 0 1.646.334 2.25.938a3.206 3.206 0 0 1 0 4.523l-1.102 1.101a3.21 3.21 0 0 1-2.273.938c-.168 0-.332-.018-.493-.047l-1.218 1.219a4.683 4.683 0 0 0 5.039-1.055l1.101-1.101A4.689 4.689 0 0 0 21 7.687a4.635 4.635 0 0 0-1.383-3.304A4.63 4.63 0 0 0 16.312 3ZM14.46 8.46l-6 6 1.078 1.08 6-6-1.078-1.08ZM8.812 10.5a4.684 4.684 0 0 0-3.328 1.383l-1.101 1.101A4.689 4.689 0 0 0 3 16.313c0 1.253.495 2.417 1.383 3.304A4.63 4.63 0 0 0 7.687 21a4.683 4.683 0 0 0 3.329-1.383l1.101-1.101a4.689 4.689 0 0 0 1.383-3.328c0-.595-.114-1.175-.328-1.711l-1.219 1.218a3.214 3.214 0 0 1-.89 2.766L9.96 18.563a3.21 3.21 0 0 1-2.274.937 3.156 3.156 0 0 1-2.25-.938 3.206 3.206 0 0 1 0-4.523l1.102-1.101A3.21 3.21 0 0 1 8.813 12c.166 0 .33.018.492.047l1.218-1.219a4.618 4.618 0 0 0-1.71-.328Z"></path>
              </svg>
              Add Video
            </div>
          </div>
        </div>

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
