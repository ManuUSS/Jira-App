import { createContext } from 'react';
import { Entry, EntryStatus } from 'types';

export interface ContextProps {
    entries: Entry[];
    getEntriesByStatus: ( status: EntryStatus ) => Entry[];
}


export const EntriesContext = createContext({} as ContextProps);

