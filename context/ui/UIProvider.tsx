import { FC, useReducer } from 'react';
import { UIContext, UIReducer } from './';


export interface UIState {
     sideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false
}

interface Props {
    children: JSX.Element
}

export const UIProvider:FC<Props> = ({ children }) => {

    const [ state, dispatch ] = useReducer( UIReducer, UI_INITIAL_STATE );

    return (
        <UIContext.Provider value={{ sideMenuOpen: false }}>
            {children}
        </UIContext.Provider>
    )
}
