import { ChangeEvent, useState, useContext } from 'react';
import { Box, Button, TextField } from "@mui/material"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SaveIcon from '@mui/icons-material/Save';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui/UIContext';

export const NewEntry = () => {

    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const { addNewEntry } = useContext( EntriesContext );
    const { isAddingEntry, setIsAddingEntry } = useContext( UIContext );

    const onInputChanged = ( event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        setInputValue( event.target.value );
    }

    const onSave = () => {
        
        if( inputValue.length < 5 ) return;

        addNewEntry( inputValue );
        setIsAddingEntry( false );
        setTouched( false );
        setInputValue('');
    }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
        
        {
            isAddingEntry ? (
                <>
                    <TextField 
                        fullWidth
                        sx={{margin: '4px 0'}}
                        placeholder='Nueva entrada'
                        autoFocus
                        multiline
                        label='Nueva entrada'
                        helperText={ inputValue.length <= 0 && touched && 'Ingrese una nueva entrada'}
                        error={ inputValue.length <= 0 && touched }
                        value={inputValue}
                        onChange={ onInputChanged }
                        onBlur={ () => setTouched( false )}
                    />
                    <Box display='flex' justifyContent='space-between'>
                        <Button
                            variant="text"
                            color="info"
                            onClick={ () => setIsAddingEntry( false ) }
                        >
                            Cancelar
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            endIcon={ <SaveIcon /> }
                            onClick={ onSave }
                        >
                            Guardar
                        </Button>
                    </Box>
                </>
            )
            : (
                <Button
                    startIcon={<AddCircleIcon />}
                    fullWidth
                    variant="outlined"
                    onClick={ () => setIsAddingEntry( true )}
                >
                    Agregar tarea
                </Button>
            )
        }

        

        

    </Box>
  )
}
