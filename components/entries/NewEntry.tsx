import { Box, Button, TextField } from "@mui/material"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';

export const NewEntry = () => {
  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
        <Button
            startIcon={<AddCircleIcon />}
            fullWidth
            variant="outlined"
        >
            Agregar tarea
        </Button>
        <TextField 
            fullWidth
            sx={{margin: '4px 0'}}
            placeholder='Nueva entrada'
            autoFocus
            multiline
            label='Nueva entrada'
            helperText='Ingrese una nueva entrada'
        />
        <Box display='flex' justifyContent='space-between'>
            <Button
                variant="text"
                color="warning"
                endIcon={ <CloseIcon /> }
            >
                Cancelar
            </Button>
            <Button
                variant="outlined"
                color="secondary"
                endIcon={ <AddCircleIcon /> }
            >
                Guardar
            </Button>
        </Box>
    </Box>
  )
}
