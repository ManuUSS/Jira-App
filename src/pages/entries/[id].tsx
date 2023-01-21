import { Button, capitalize, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, IconButton, Radio, RadioGroup, TextField } from '@mui/material';
import { Layout } from '../../../components/layout/Layout';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { EntryStatus } from 'types';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

const EntryPage = () => {
  return (
    <Layout title='Siu'>
        <>
            <Grid container justifyContent='center' sx={{ marginTop: 2 }}>
                <Grid item xs={ 12 } sm={ 8 } md={ 6 }>
                    <Card>
                        <CardHeader
                            title="Entrada:"
                            subheader={`Creada hace: ...  minutos`}
                        />
                        <CardContent>
                            <TextField 
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                fullWidth
                                placeholder='Nueva entrada'
                                label='Nueva entrada'
                                autoFocus
                                multiline
                            />
                            <FormControl>
                                <FormLabel>Estado:</FormLabel>
                                <RadioGroup
                                    row
                                >
                                    {
                                        validStatus.map( (option) => (
                                            <FormControlLabel key={ option }
                                                value={ option }
                                                control={ <Radio /> }
                                                label={ capitalize( option ) }
                                            />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </CardContent>
                        <CardActions>
                            <Button
                                startIcon={ <SaveIcon /> }
                                variant='contained'
                                fullWidth
                            >
                                Guardar
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <IconButton
                sx={{ position: 'fixed', bottom: 30, right: 30, backgroundColor: 'error.dark' }}
            >
                <DeleteIcon />
            </IconButton>
        </>
    </Layout>
  )
}

export default EntryPage;
