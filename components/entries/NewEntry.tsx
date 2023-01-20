import { ChangeEvent, useState } from "react";
import { Box, Button, TextField } from "@mui/material"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SaveIcon from '@mui/icons-material/Save';

export const NewEntry = () => {

    const [isAdding, setIsAdding] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const onInputChanged = ( event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        setInputValue( event.target.value );
    }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
        
        {
            isAdding ? (
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
                            onClick={ () => setIsAdding(false) }
                        >
                            Cancelar
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            endIcon={ <SaveIcon /> }
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
                    onClick={ () => setIsAdding( true )}
                >
                    Agregar tarea
                </Button>
            )
        }

        

        

    </Box>
  )
}
