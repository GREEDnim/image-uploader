
import { createContext } from "react";

export const DisplayContext = createContext({
    changeWhatToDisplay: () => {},
    url: '',
    setUrl: () => {},
    localUrl: {}
  });