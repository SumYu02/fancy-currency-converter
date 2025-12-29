import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, swapResult }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !swapResult) return null;
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div 
        ref={modalRef}
        className="flex flex-col items-center bg-white shadow-md  rounded-xl py-6 px-5 md:w-[460px] w-[370px] border border-gray-200 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl"
          aria-label="Close"
        >
              <IoCloseOutline className="w-6 h-6" />

        </button>
        <h2 className="font-semibold mt-4 text-xl text-green-600 mb-3">
          Swap Successful!
        </h2>
        <p className="text-gray-600 mt-2 text-sm">
          Your transaction has been completed successfully.
        </p>
        <div className="flex flex-col items-center mt-4">
          <p className="text-gray-600 text-sm">
            From: {swapResult.from.amount} {swapResult.from.currency}
          </p>
          <p className="text-gray-600 text-sm">
            To: {swapResult.to.amount} {swapResult.to.currency}
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Exchange Rate: 1 {swapResult.from.currency} = {swapResult.exchangeRate.toFixed(6)} {swapResult.to.currency}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
