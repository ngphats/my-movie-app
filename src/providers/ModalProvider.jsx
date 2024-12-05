import { useState } from "react";
import ModalContext from "../contexts/ModelContext";

function ModalProvider({ children }) {
  const [isShowing, setIsShowing] = useState(false);
  const [content, setContent] = useState();

  const openPopup = (content) => {
    setIsShowing(true);
    setContent(content);
  };

  return (
    <ModalContext.Provider value={openPopup}>
      {children}
      {isShowing && (
        <div
          className="fixed inset-0 bg-slate-600/60 flex items-center justify-center"
          onClick={() => {
            setIsShowing(false);
          }}
        >
          {content}
        </div>
      )}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
