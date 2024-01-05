import { useState, createContext } from "react";
import { MediaContextType } from "../utils/types";

const MultimediaContext = createContext([{}, () => {}]);

const MultimediaProvider = ({ children }: { children: React.ReactNode }) => {
  const [mediaEvent, setMediaEvent] = useState<MediaContextType | null>();

  return (
    // @ts-ignore:next-line
    <MultimediaContext.Provider value={[mediaEvent, setMediaEvent]}>
      {children}
    </MultimediaContext.Provider>
  );
};

export { MultimediaContext, MultimediaProvider };
