import { useContext } from 'react';

import Link from 'next/link';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { UIContext } from '../../context/ui/UIContext';

export const Navbar = () => {

  const { openSideMenu } = useContext( UIContext );

  return (
    <AppBar position='sticky'>
        <Toolbar>
            <IconButton sx={{ color: '#ffffff' }} onClick={ openSideMenu }>
                <MenuIcon />
            </IconButton>
            <Link href='/' passHref>
              <Typography variant='h5' color='white'>Open Jira</Typography>
            </Link>
        </Toolbar>
    </AppBar>
  )
}
