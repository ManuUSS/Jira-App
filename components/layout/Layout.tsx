import { FC } from "react"
import Head from "next/head"
import { Box } from "@mui/material"
import { Navbar } from "components/ui/Navbar"

interface Props {
    title?: string,
    children: JSX.Element
}

export const Layout: FC<Props> = ({ title = 'Open Jira', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
        <Head>
            <title>{title}</title>
        </Head>
        <Navbar />
        <Box sx={{ padding: '10px 20px' }}>
            { children }
        </Box>
    </Box>
  )
}
