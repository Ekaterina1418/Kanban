import { useState } from "react";

const FlowPanel = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
      <>
          {showSidebar && (
              <div className="top-0 right-0 w-[35vw] bg-blue-600  p-10 pl-20 text-white fixed h-full z-40">
                  <button
                      className={`flex text-[30px] text-white items-center cursor-pointer fixed right-[30px] top-3  z-40 ease-in-out duration-300 ${
                          showSidebar ? "translate-x-0 " : "translate-x-full"
                      }`}
                      onClick={() => setShowSidebar(!showSidebar)}
                  >
                      x
                  </button>

                  <h3 className="mt-20 text-2xl font-semibold text-white">
                      I am a sidebar
                  </h3>
                 
              </div>
          )}
      </>
  );
}

export default FlowPanel