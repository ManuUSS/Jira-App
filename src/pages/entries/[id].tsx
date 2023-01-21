import { useState, useMemo, ChangeEvent, FC } from 'react';
import { GetServerSideProps } from 'next';
import { Button, capitalize, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, IconButton, Radio, RadioGroup, TextField } from '@mui/material';
import { Layout } from '../../../components/layout/Layout';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { EntryStatus } from 'types';
import { dbEntries } from 'database';
import { Entry } from '../../../types/entry';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

interface Props {
    entry: Entry
}


const EntryPage:FC<Props> = ({ entry }) => {

    const [inputValue, setInputValue] = useState(entry.description);
    const [status, setStatus] = useState<EntryStatus>(entry.status);
    const [touched, setTouched] = useState(false);

    const isNotValid = useMemo(() => inputValue.length <= 5 && touched, [ inputValue, touched ]);

    const onInputChanged = ( event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        setInputValue( event.target.value );
    }

    const onStatusChanged = ( event:ChangeEvent<HTMLInputElement> ) => {
        setStatus( event.target.value as EntryStatus );
    }
    
    const onSave = () => {

    }

  return (
    <Layout title={inputValue.substring(0,20) + '...'}>
        <>
            <Grid container justifyContent='center' sx={{ marginTop: 2 }}>
                <Grid item xs={ 12 } sm={ 8 } md={ 6 }>
                    <Card>
                        <CardHeader
                            title={`Entrada:`}
                            subheader={`Creada hace: ${ entry.createdAt } minutos`}
                        />
                        <CardContent>
                            <TextField 
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                fullWidth
                                placeholder='Nueva entrada'
                                label='Nueva entrada'
                                autoFocus
                                multiline
                                value={inputValue}
                                helperText={ isNotValid && 'Ingrese un valor' }
                                onChange={ onInputChanged }
                                onBlur={() => setTouched(true)}
                                error={ isNotValid }
                            />
                            <FormControl>
                                <FormLabel>Estado:</FormLabel>
                                <RadioGroup
                                    row
                                    value={ status }
                                    onChange={ onStatusChanged }
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
                                onClick={ onSave }
                                disabled={ inputValue.length <= 5 }
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { id } = params as { id: string };

    const entry = await dbEntries.getEntryById( id );

    if( !entry ){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            entry            
        }
    }
}

export default EntryPage;
