import React, { useState, useEffect } from "react";
import Button from "./Button";

const DeleteModal = ({ onConfirm }) => {
  const [showModal, setShowModal] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Delete All</Button>
      {showModal && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-white/60 z-50"
          onClick={() => setShowModal(false)}
        >
          <div className="mx-auto my-72 max-w-md bg-zinc-400 rounded p-12">
            <p className="text-lg text-center font-medium">
              Are you sure you want to delete all favorites?
            </p>
            <div className="flex justify-center p-1 mt-5">
              <Button onClick={() => setShowModal(false)}>Cancel</Button>
              <Button
                success
                onClick={() => {
                  onConfirm();
                  setShowModal(false);
                }}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;
