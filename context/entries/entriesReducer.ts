import { EntriesState } from './';
import { EntryStatus } from '../../types/entry';
type EntriesActionType = 
{ type: '[Entries] - Pending by status', payload:EntryStatus } 
| { type: '[Entries] - In Progress Entries', payload:EntryStatus } 
| { type: '[Entries] - Done Entries', payload:EntryStatus } 

export const entriesReducer = ( state: EntriesState, action:EntriesActionType ): EntriesState => {
    
    switch ( action.type ) {
        case '[Entries] - Pending by status':
            
            return {
                ...state
            }
        
        default:
            return state;
    }
}