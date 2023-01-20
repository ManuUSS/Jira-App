import { NextPage } from "next";
import { Grid, Card, CardHeader, CardContent } from '@mui/material';
import { Layout } from "components/layout";
import { EntryList } from "components/entries";


const HomePage: NextPage = () => {
  return (
    <Layout title="Home - Open Jira">
      <Grid container spacing={ 2 }>
        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{ height: ' calc( 100vh - 100px ) ' }}>
            <CardHeader title="Pendientes"/>
            <CardContent>
              <EntryList status="pending"/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: ' calc( 100vh - 100px ) ' }}>
            <CardHeader title="En Progreso"/>
            <CardContent>
              <EntryList status="in-progress"/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: ' calc( 100vh - 100px ) ' }}>
            <CardHeader title="Completadas"/>
            <CardContent>
              <EntryList status="finished"/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage;
