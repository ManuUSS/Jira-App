import { DragEvent, FC, useContext, useEffect, useState } from 'react';
import { List, Paper } from "@mui/material"
import { UIContext } from '../../context/ui/UIContext';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { Entry, EntryStatus } from "types"
import { EntryCard } from "./"

import styles from './EntryList.module.css';

interface Props {
    status: EntryStatus;
}

export const EntryList:FC<Props> = ({ status }) => {
  
    const { entries, getEntriesByStatus, updateEntry } = useContext( EntriesContext );
    const { isDragging, endDragging } = useContext( UIContext );
    const [ entriesCard, setEntriesCard ] = useState<Entry[]>([]);
    
    useEffect(() => {
        setEntriesCard(getEntriesByStatus( status ));
    }, [ entries ]);
    

    const onDropEntry = ( event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text');
        const entry = entries.find( ( e ) => e._id === id )!;
        entry.status = status;
        updateEntry( entry );
        endDragging();
    }

    const allowDrop = ( event:DragEvent<HTMLDivElement> ) => {
        event.preventDefault();
    }

    return (
    <div 
        onDrop={ onDropEntry }
        onDragOver={ allowDrop }
        className={ isDragging ? styles.dragging : '' }
    >   
        <Paper
            sx={{ height: 'calc(100vh - 120px)',  backgroundColor: 'transparent', paddingX: '5px', boxShadow: 'none ' }}
        >
            <List sx={{ opacity: isDragging ? 0.5 : 1,  transition: 'all .3s ease-in'}}>
                {
                    entriesCard.map((entry) => (
                        <EntryCard key={ entry._id } entry={ entry }/>
                    ))
                }
            </List>
        </Paper>

    </div>
  )
}
