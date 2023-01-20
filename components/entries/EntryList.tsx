import { DragEvent, FC, useContext, useEffect, useState } from 'react';
import { List, Paper } from "@mui/material"
import { Entry, EntryStatus } from "types"
import { EntryCard } from "./"
import { EntriesContext } from '../../context/entries/EntriesContext';

interface Props {
    status: EntryStatus;
}

export const EntryList:FC<Props> = ({ status }) => {
  
    const { entries, getEntriesByStatus } = useContext( EntriesContext );
    const [ entriesCard, setEntriesCard ] = useState<Entry[]>([]);
    
    useEffect(() => {
        setEntriesCard(getEntriesByStatus( status ));
    }, [ entries ]);
    

    const onDropEntry = ( event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text');
    }

    const allowDrop = ( event:DragEvent<HTMLDivElement> ) => {
        event.preventDefault();
    }

    return (
    <div 
        onDrop={ onDropEntry }
        onDragOver={ allowDrop }
    >
        <Paper
             
            sx={{ height: 'calc(100%vh - 250px)', overflowY: 'scroll', backgroundColor: 'transparent', paddingX: '5px', boxShadow: 'none ' }}
        >
            <List sx={{ opacity: 1 }}>
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
