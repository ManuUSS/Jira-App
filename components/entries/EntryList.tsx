import { List, Paper } from "@mui/material"
import { FC, useContext, useEffect, useState } from 'react';
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
    


    return (
    <div>
        <Paper sx={{ height: 'calc(100%vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '5px' }}>
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
