import { Layout } from "components/layout";
import { NextPage } from "next";
import { Typography } from '@mui/material'
const HomePage: NextPage = () => {
  return (
    <Layout>
      <Typography variant='h1' color='primary'>Hola Mundo</Typography>
    </Layout>
  )
}

export default HomePage;
