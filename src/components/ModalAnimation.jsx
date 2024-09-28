import { useState } from "react";
import TabNav from "./TabNav";

const ModalAnimations = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalClass, setModalClass] = useState("");

  const handleClick = (id) => {
    setModalClass(id);
    setModalActive(true);
  };

  const closeModal = () => {
    setModalClass((prev) => `${prev} out`);
    setTimeout(() => {
      setModalActive(false);
    }, 500);
  };

  return (
    <div className={`${modalActive ? "modal-active" : ""}`}>
      {modalActive && (
        <div
          id="modal-container"
          className={`fixed inset-0 z-50 py-6 px-80 bg-black bg-opacity-50 flex items-center justify-center scale-0 ${modalClass}`}
        >
          <div className="modal-background w-full h-full flex items-center justify-center ">
            <div className="modal bg-white p-8 rounded-md relative shadow-lg">
                <p className="text-white bg-blue-500 cursor-pointer absolute top-0 right-0  p-3" onClick={closeModal}>X</p>
              <TabNav/>
            </div>
          </div>
        </div>
      )}
      <div className="content text-center bg-white h-full relative z-0">
        <h1 className="pt-20 pb-8 text-4xl">Click to view Tab Nav Example</h1>
        <div className="buttons max-w-lg mx-auto">
          <div
            id="one"
            className="button cursor-pointer inline-block py-2 px-4 m-2 bg-gray-200 rounded-md shadow-md hover:bg-blue-500 hover:text-white"
            onClick={() => handleClick("one")}
          >
            Tab Nav
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ModalAnimations;