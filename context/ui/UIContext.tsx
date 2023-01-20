import { createContext } from 'react';

export interface ContextProps {
     sideMenuOpen: boolean;
     isAddingEntry: boolean;
     isDragging: boolean;
     openSideMenu: () => void;
     closeSideMenu: () => void;
     setIsAddingEntry: ( value: boolean ) => void;
     startDragging: () => void;
     endDragging: () => void;
}


export const UIContext = createContext({} as ContextProps);