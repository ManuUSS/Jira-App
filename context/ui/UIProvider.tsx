import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';


export interface UIState {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false,
    isAddingEntry: false
}

interface Props {
    children: JSX.Element
}

export const UIProvider:FC<Props> = ({ children }) => {

    const [ state, dispatch ] = useReducer( uiReducer, UI_INITIAL_STATE );

    const openSideMenu = () => {
        dispatch({ type: '[UI] - Open Sidebar'})
    }

    const closeSideMenu = () => {
        dispatch({ type: '[UI] - Close Sidebar'});
    }

    const setIsAddingEntry = ( value: boolean ) => {
        dispatch({ type: '[UI] - Is Adding Entry', payload: value });
    }

    return (
        <UIContext.Provider value={{ 
            ...state, 
            
            openSideMenu,
            closeSideMenu,

            setIsAddingEntry
        }}    
        >
            {children}
        </UIContext.Provider>
    )
}
