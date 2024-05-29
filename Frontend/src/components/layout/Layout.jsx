import {Grid,Toolbar,AppBar, Typography, Divider, Drawer, Box , List} from "@mui/material";
import { useTheme } from '@emotion/react';
import { mainListItems,secondaryListItems,footerListItems } from './ListItems';
import { Outlet } from "react-router-dom";


const Layout = () => {
    const drawerWidth = 240;
    const theme=useTheme();
  return (
    <div >
      <Drawer variant="permanent" 
        sx={{
            position:'fixed',
            width: drawerWidth,
            height: '100vh',
            flexShrink: 0,
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            [`& .MuiDrawer-paper`]: { 
            width: drawerWidth, 
            boxSizing: 'border-box',
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'space-between', 
            },
          }}>
            <Box sx={{
                width: drawerWidth,
                height: '101px', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

              }}>
              <Box
                component="img"
                src="logo.png"
                alt="orragon"
                sx={{
                  width: 'auto',
                  height: '80px', 
                  objectFit: 'cover',
                  padding:'15px',

                }}
              />
            </Box>
            <Box 
            >
              <List component="nav">
                {mainListItems}
                {secondaryListItems}
                
              </List>
            </Box>
            <Toolbar/>
            <Toolbar/>

            <Box>
              <List disablePadding	>{footerListItems}</List>
            </Box>
        </Drawer>
        <Box sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, display: 'flex', flexDirection: 'column' }}>
          <AppBar position="fixed" elevation={0} 
            sx={{
              px:2,
              width: `calc(100% - ${drawerWidth}px)`, 
              ml: `${drawerWidth}px`,
              backgroundColor: theme.palette.secondary.light,
              height: '101px',
            }}>
                <Toolbar style={{ minHeight: '101px', display: 'flex', alignItems: 'center'}}>
                  <Typography variant='h2'color={theme.palette.primary.main}>
                    Products
                  </Typography>
                  
                  
                  <Grid  item xs={6} justifyContent="flex-end" sx={{ display:'flex',
                      gap:2, 
                    }}>
                  </Grid>

                
                </Toolbar>
                <Divider/>
            </AppBar>
        <Box sx={{ mt: '101px', px: 5, py:2, flexGrow: 1,backgroundColor:theme.palette.secondary.light ,minHeight: 'calc(100vh - 101px)'}}> 
          <Outlet /> 
        </Box>
        </Box>

    </div>
  )
}

export default Layout
