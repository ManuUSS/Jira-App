import { EntriesState } from './';
import { EntryStatus, Entry } from '../../types/entry';
type EntriesActionType = 
{ type: '[Entries] - Add New Entry', payload: Entry } 
| { type: '[Entries] - In Progress Entries', payload:EntryStatus } 
| { type: '[Entries] - Done Entries', payload:EntryStatus } 

export const entriesReducer = ( state: EntriesState, action:EntriesActionType ): EntriesState => {
    
    switch ( action.type ) {
        case '[Entries] - Add New Entry':
            
            return {
                ...state,
                entries: [ ...state.entries, action.payload ]
            }
        
        default:
            return state;
    }
}