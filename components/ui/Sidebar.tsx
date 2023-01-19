import { Divider, Drawer, Box, Typography, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import EmailIcon from '@mui/icons-material/Email';


const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar = () => {
  return (
    <Drawer
        anchor='left'
        open 
        // onClose={}
    >
        <Box sx={{ width: 250 }}>
            <Box sx={{ padding: '5px 10px' }}>
                <Typography variant='h4'>Menú</Typography>
            </Box>
            <List>
                {
                    menuItems.map( (item, index) => (
                        <ListItemButton key={ item }>
                            <ListItemIcon>
                                { index % 2 ? <AllInboxIcon /> : <EmailIcon /> }
                            </ListItemIcon>
                            <ListItemText primary={ item } />
                        </ListItemButton>
                    ))
                }
            </List>
            <Divider />
        </Box>
        
    </Drawer>
  )
}
