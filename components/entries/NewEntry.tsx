import { Box, Button, TextField } from "@mui/material"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SaveIcon from '@mui/icons-material/Save';

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
                color="info"
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
    </Box>
  )
}
