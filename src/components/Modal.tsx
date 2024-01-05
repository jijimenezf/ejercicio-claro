import { useState, useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
};

export default function Modal({
  isOpen,
  hasCloseBtn,
  onClose,
  ariaLabel,
  children,
}: ModalProps) {
  const [isModalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  // Close the modal using the ESC keyboard
  useEffect(() => {
    const closeOnEscapePressed = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", closeOnEscapePressed);
    return () => window.removeEventListener("keydown", closeOnEscapePressed);
  }, []);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 overflow-y-auto bg-gray-800 bg-opacity-100"
            aria-labelledby={ariaLabel ?? "lista de canales y programación"}
            role="dialog"
            aria-modal="true"
            onClick={() => false}
          ></div>
          <div className="fixed inset-0 pointer-events-none flex justify-center items-center max-h-screen overflow-scroll">
            <div
              className={`w-full pointer-events-auto max-h-screen md:rounded-xl`}
            >
              {hasCloseBtn && (
                <button
                  className="z-10 sticky top-0 left-full text-4xl text-white"
                  onClick={handleCloseModal}
                >
                  &times;
                </button>
              )}
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
}
