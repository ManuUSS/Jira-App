import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Navbar = () => {
  return (
    <AppBar position='sticky'>
        <Toolbar>
            <IconButton sx={{ color: '#ffffff' }}>
                <MenuIcon />
            </IconButton>
            <Typography variant='h6'>Open Jira</Typography>
        </Toolbar>
    </AppBar>
  )
}
