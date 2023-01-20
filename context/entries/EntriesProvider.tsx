import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from 'types';
import { EntriesContext, entriesReducer } from './';
import { EntryStatus } from '../../types/entry';


export interface EntriesState {
    entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: []
}

interface Props {
    children: JSX.Element
}

export const EntriesProvider:FC<Props> = ({ children }) => {

    const [ state, dispatch ] = useReducer( entriesReducer, ENTRIES_INITIAL_STATE );

    const getEntriesByStatus = ( status: EntryStatus ): Entry[] => {
        const entries = state.entries.filter( ( entry ) => entry.status === status );
        return entries;
    }

    const addNewEntry = ( description:string ) => {
        const newEntry : Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }
        dispatch({ type: '[Entries] - Add New Entry', payload: newEntry });
    }

    const updateEntry = ( entry:Entry ) => {
        dispatch({ type: '[Entries] - Updated Entry', payload: entry })
    }

    return (
        <EntriesContext.Provider value={{ ...state, getEntriesByStatus, addNewEntry, updateEntry }}>
            {children}
        </EntriesContext.Provider>
    )
}