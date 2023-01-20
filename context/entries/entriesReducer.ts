import { EntriesState } from './';
import { EntryStatus, Entry } from '../../types/entry';
type EntriesActionType = 
{ type: '[Entries] - Add New Entry', payload: Entry } 
| { type: '[Entries] - Updated Entry', payload: Entry } 
| { type: '[Entries] - Refresh Entries', payload: Entry[] } 

export const entriesReducer = ( state: EntriesState, action:EntriesActionType ): EntriesState => {
    
    switch ( action.type ) {
        case '[Entries] - Add New Entry':
            
            return {
                ...state,
                entries: [ ...state.entries, action.payload ]
            }

        case '[Entries] - Updated Entry':
            
            return {
                ...state,
                entries: state.entries.map( ( entry ) => {
                    if( entry._id === action.payload._id ){
                        entry.status = action.payload.status;
                        entry.description = action.payload.description;
                    }
                    return entry
                })
            }
        
            case '[Entries] - Refresh Entries':
            
            return {
                ...state,
                entries: [ ...action.payload ]
            }
        
        default:
            return state;
    }
}