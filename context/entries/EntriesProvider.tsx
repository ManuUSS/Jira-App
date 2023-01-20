import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from 'types';
import { EntriesContext, entriesReducer } from './';


export interface EntriesState {
    entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Lorem kuygv toak kal main srpep pero.',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'Khn juo mioto perro saic o perm y ta.',
            status: 'in-progress',
            createdAt: Date.now() * 1.3
        },
        {
            _id: uuidv4(),
            description: 'Kuiyn na dtop pero kmau jun gla por.',
            status: 'finished',
            createdAt: Date.now() * 1.5
        }
    ]
}

interface Props {
    children: JSX.Element
}

export const EntriesProvider:FC<Props> = ({ children }) => {

    const [ state, dispatch ] = useReducer( entriesReducer, ENTRIES_INITIAL_STATE );

    return (
        <EntriesContext.Provider value={{ ...state }}>
            {children}
        </EntriesContext.Provider>
    )
}