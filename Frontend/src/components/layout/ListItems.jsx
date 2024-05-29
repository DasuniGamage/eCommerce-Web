import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import {Dashboard,Analytics,Categories,Units,Products}  from '../icons/Icons.jsx'
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
    '&:hover, &:focus': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,  
      fontWeight: 600,
      borderRadius: '12px',
    },
  }));

export const mainListItems = (
  <React.Fragment>
    <ListSubheader component="div"sx={{
        textAlign: 'left',
        paddingLeft: 1,
        marginLeft: 1,  
      }}>
      Dashboard
    </ListSubheader>
        <CustomListItemButton>
        <ListItemIcon >
            <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        </CustomListItemButton>
    <CustomListItemButton>
      <ListItemIcon>
        <Analytics />
      </ListItemIcon>
      <ListItemText primary="Analytics" />
    </CustomListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div"sx={{
        textAlign: 'left',
        paddingLeft: 1, 
        marginLeft: 1, 
      }}>
      Products
    </ListSubheader>
    <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
    <CustomListItemButton>
      <ListItemIcon>
        <Products />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </CustomListItemButton>
    </Link>
    <CustomListItemButton>
      <ListItemIcon>
        <Categories />
      </ListItemIcon>
      <ListItemText primary="Categories" />
    </CustomListItemButton>
    <CustomListItemButton>
      <ListItemIcon>
        <Units />
      </ListItemIcon>
      <ListItemText primary="Units" />
    </CustomListItemButton>
  </React.Fragment>
);

export const footerListItems = (
    <React.Fragment>
      <CustomListItemButton>
        <ListItemText primary="Help & Support" />
        <ListItemIcon>
          <ArrowOutwardIcon />
        </ListItemIcon>
      </CustomListItemButton>
      <CustomListItemButton>
        <ListItemText primary="Platform Guidelines" />
        <ListItemIcon>
          <ArrowOutwardIcon />
        </ListItemIcon>
      </CustomListItemButton>
    </React.Fragment>
  );